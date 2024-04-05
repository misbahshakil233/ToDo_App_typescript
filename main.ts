import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What do you want to add to your todo list?",
            type: "input"
        },
        {
            name: "addMore",
            message: "Are you sure you want to add another task?",
            type: "confirm",
            default: false
        }
    ]);

    todos.push(addTask.todo);
    condition = addTask.addMore;

    // Display todos as a list
    console.log("\nYour Todo List:");
    todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
        condition=true;
    });
}


;
