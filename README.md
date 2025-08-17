# 📝 Todo-CLI: Your Terminal Task Manager

A simple, fast, and elegant command-line to-do list application to manage your tasks directly from the terminal. Never leave your workflow to manage your daily tasks again!

---

## ✨ Features

- ✅ **Add Tasks:** Quickly add new tasks to your list.  
- 📋 **List All Tasks:** View all your pending and completed tasks in a clean, organized format.  
- ✔️ **Mark as Done:** Easily mark tasks as complete.  
- ✏️ **Edit Tasks:** Correct typos or update a task's description.  
- 🗑️ **Remove Tasks:** Remove specific tasks, all completed tasks, or wipe the entire list clean.  
- 🎨 **Colorful Interface:** Uses [Chalk](https://github.com/chalk/chalk) for a visually appealing and easy-to-read output.  
- 💾 **Persistent Storage:** Your tasks are saved locally in your home directory, so they're always there when you come back.  

---

## 🚀 Installation & Setup

You'll need [Node.js](https://nodejs.org/) and `npm` installed on your machine.

1. **Clone the Repository**
First, clone this repository to your local machine using Git.
```bash
git clone https://github.com/Shiva-Prasad-Reddy-K/Terminal-To-Do.git
```


2. **Navigate to the Project Directory**


3. **Install Dependencies**
Install the necessary npm packages defined in ```package.json```.
```bash
npm install
```


4. **Make the Command Global**
To use the ```todo``` command from anywhere in your terminal, create a symbolic link using npm.
```bash
npm link
```

This will make your CLI tool globally available on your system, so you can call it just by typing ```todo```.


---

## 📖 Usage & Commands
Here's a complete guide to all the available commands.

### ➕ Add a Task
```add```
Adds a new task to your to-do list. The task is stored as pending.  

**Command**:
```bash
todo add "<your task description>"
```

**Example**:
```bash
todo add "Create a README file for my project"
```


### 📋 List All Tasks
```list```
Displays all tasks in your list.  
Completed tasks will appear **dimmed** and **struck through**.  

**Command**:
```bash
todo list
```

**Example Output**:
```
1. Create a README file for my project
2. ~~Push the project to GitHub~~
```


### ✔️ Mark as Done
Marks an existing task as completed.  

**Command**:
```bash
todo done "<task to mark as done>"
```
**Example**:
```bash
todo done "Create a README file for my project"
```



### ✏️ Edit a Task
Edits the description of an existing task.  

**Command**:
```bash
todo edit "<old task description>" "<new task description>"
```

**Example**:
```bash
todo edit "Create a README file" "Create a beautiful README file"
```



### 🗑️ Remove Tasks
Removes tasks from your list. This command is very flexible and has several options.

Remove a specific task:

**Command**:
```bash
todo remove "<task to remove>"
```

**Example**:
```bash
todo remove "Old task I don't need"
```



Remove all **completed tasks**:
Use the ```-d``` or ```--done``` flag to clean up your list by removing all completed tasks

**Command**:
```bash
todo remove -d
```
or 

```bash
todo remove --done
```



Remove **all tasks** (careful!):
Use the ```-a``` or ```--all``` flag to completely wipe your to-do list. Use with caution!


```bash
todo remove -a
```
or
```bash
todo remove --all
```


---

## 🛠️ Built With

- [Node.js](https://nodejs.org/) - The runtime environment  
- [Commander.js](https://github.com/tj/commander.js/) - For building the command-line interface  
- [Chalk](https://github.com/chalk/chalk) - For styling the terminal output with colors  

---

## 🤝 Contributing

Contributions are welcome! 🎉  
If you have ideas for new features or find a bug, please open an issue or submit a pull request.

1. Fork the Project  
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request  

---
