import { Command } from "commander";
import chalk from "chalk";
import fs from 'fs';

const program = new Command();
let contents = JSON.parse(fs.readFileSync('tasks.txt', 'utf-8'))

program.command('add')
    .description('Add a task into the list')
    .argument('<string>', "Task to add")
    .action((str) => {
        contents.push({task: str, status: true})
        fs.writeFileSync("tasks.txt", JSON.stringify(contents), {encoding: 'utf8'})
        console.log(chalk.green.bold('Task added to the list'))
    })

program.command('done')
    .description('Mark a task as done in the list')
    .argument('<string>', "Task to mark as done")
    .action((str) => {
        let found = false;
        for(let i = 0; i < contents.length; i++) {
            if (str === contents[i].task) {
                contents[i].status = false;
                found = true;
                console.log(chalk.green('Task marked as done'))
                break;
            }
        }
        if(!found) {
            console.log(chalk.red("Ther is no such task"))
        }
    })

program.command('remove')
    .description('Remove a task from the list')



program.command('edit')
    .description("Edit an existing task from the list")


program.command('list')
    .description('List all the tasks in the todo list')
    // .option('-p, --pending', "list only the pending tasks")
    // .option('--all', "list all the tasks for the day")
    .action((str, options) => {
        for(let i = 0; i < contents.length; i++){
            console.log(contents[i].task)
        }
    });

program.parse();