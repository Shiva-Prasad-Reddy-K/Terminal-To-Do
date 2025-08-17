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


2. **Navigate to the Project Directory**


3. **Install Dependencies**


4. **Make the Command Global**


Now you can simply run the app using:


---

## 📖 Usage & Commands

### ➕ Add a Task
Adds a new task to your to-do list. The task is stored as pending.  


### 📋 List All Tasks
Displays all tasks in your list.  
Completed tasks will appear **dimmed** and **struck through**.  


### ✔️ Mark as Done
Marks an existing task as completed.  


### ✏️ Edit a Task
Edits the description of an existing task.  


### 🗑️ Remove Tasks
Remove a specific task:


Remove all **completed tasks**:


Remove **all tasks** (careful!):
```todo remove -a```
or
```todo remove --all```


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

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
