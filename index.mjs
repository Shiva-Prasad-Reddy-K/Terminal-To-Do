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

program.parse();