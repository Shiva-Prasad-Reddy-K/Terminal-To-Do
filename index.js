#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import fs from 'fs';
import path from "path";
import os from "os";

const tasks_file = path.join(os.homedir(), ".tasks.json");

function loadTasks() {
    try {
        return JSON.parse(fs.readFileSync(tasks_file, "utf-8"));
    } catch {
        return [];
    }
};

function saveTasks(tasks) {
    fs.writeFileSync(tasks_file, JSON.stringify(tasks, null, 2), 'utf-8')
}

function rearrange(contents) {
    let p = 0;
    for(let i = 0; i < contents.length; i ++) {
        if (contents[i].status == true) {
            let temp = contents[i]
            contents[i] = contents[p]
            contents[p] = temp
            p ++
        };
    };
    saveTasks(contents);
};

const program = new Command();

program
    .name('todo')
    .description('A CLI To-Do application')

program.command('add')
    .description('Add a task into the list')
    .argument('<string>', "Task to add")
    .action((str) => {
        let contents = loadTasks();
        contents.push({task: str, status: true})
        console.log(chalk.green.bold('Task added to the list'));
        rearrange(contents);
    })

program.command('done')
    .description('Mark a task as done in the list')
    .argument('<string>', "Task to mark as done")
    .action((str) => {
        const contents = loadTasks();
        let found = false;
        for(let i = 0; i < contents.length; i++) {
            if (str === contents[i].task) {
                contents[i].status = false;
                found = true;
                console.log(chalk.green.bold('Task marked as done'));
                break;
            }
        }
        if(!found) {
            console.log(chalk.red("There is no such task"));
        }
        rearrange(contents);
    })

program.command('remove')
    .description('Remove a task from the list')
    .option('-d, --done', "Remove all the completed tasks")
    .option("-a, --all", "Remove all the tasks from the list")
    .argument('[string]', 'Task that needs to be removed')
    .action((str, options) => {
        if (options.done && options.all) {
            console.log(chalk.red.bold("Error: Cannot use --done and --all flags together."));
            return;
        }

        let contents = loadTasks();
        let tasksChanged = false;

        if (options.all) {
            if (contents.length > 0) {
                contents = [];
                console.log(chalk.green.bold("Removed all tasks from the list."));
                tasksChanged = true;
            } else {
                console.log(chalk.yellow("Task list is already empty."));
            }
        } else if (options.done) {
            const originalLength = contents.length;
            contents = contents.filter(task => task.status === true);
            if (originalLength === contents.length) {
                console.log(chalk.yellow.bold("No completed tasks to remove."));
            } else {
                console.log(chalk.green.bold("Removed all the finished tasks."));
                tasksChanged = true;
            }
        } else if (str) {
            const initialLength = contents.length;
            contents = contents.filter(task => task.task !== str);
            if (contents.length === initialLength) {
                console.log(chalk.red.bold("No such task found in the list."));
            } else {
                console.log(chalk.green.bold(`Task "${str}" removed.`));
                tasksChanged = true;
            }
        } else {
            console.log(chalk.yellow("Please specify a task to remove or use an option like -a or -d."));
        }
        if (tasksChanged) {
            saveTasks(contents);
        }
    });



program.command('edit')
    .description("Edit an existing task from the list")
    .argument('<oldTask>', "Existing task to edit")
    .argument("<newTask>", "New task")
    .action((oldTask, newTask) => {
        const contents = loadTasks();
        const idx = contents.findIndex(t => t.task === oldTask);
        if (idx === -1) {
            console.log(chalk.red("There is no such task"));
        } else {
            contents[idx].task = newTask;
            saveTasks(contents);
            console.log(chalk.green("Task updated"));
        }
    });


program.command('list')
    .description('List all the tasks in the todo list')
    .action((str, options) => {
        let contents = loadTasks();
        if (contents.length == 0) {
            console.log(chalk.green.bold("You don't have any tasks in the list"))
        } else {
            for(let i = 0; i < contents.length; i++){
                if(contents[i].status == true) {
                    console.log(`${i + 1}. ${contents[i].task}`)
                } else {
                    console.log(`${i + 1}. ${chalk.dim.strikethrough(contents[i].task)}`)
                }
            }
        }
    });

program.parse();