import { Command } from "commander";
import fs from 'fs';

const program = new Command();
let contents = JSON.parse(fs.readFileSync('tasks.txt', 'utf-8'))

program.command('add')
    .description('Add a task into the list')
    .argument('<string>', "Task to add")
    .action((str) => {
        contents.push({task: str, status: true})
        console.log(contents)
        fs.writeFileSync("tasks.txt", JSON.stringify(contents), {encoding: 'utf8'})
    })


program.command('list')
    .description('List all the tasks in the todo list')
    .option('-p, --pending', "list only the pending tasks")
    .option('--all', "list all the tasks for the day")
    .action((options) => {
        for(let i = 0; i < contents.length; i++){
            console.log(contents[i].task)
        }
    });

program.parse();