import inquirer from "inquirer";
import chalk from "chalk"


//task
//ask todo
//tell todo
//ptnt in show just like list



//ask todo
let todo = []
let condition = true;
while (condition) {

    let addTodo = await inquirer.prompt(
        [
            {
                name: "firstQuestuin",
                message: "what do you want to add in todos:",
                type: "input"
            },

            {
                name: "secondQuestion",
                message: "would you add or more ? ",
                type: "confirm",
                default: "true"
            }

        ]
    );


    //tell todo
    todo.push(addTodo.firstQuestuin)
    
 //put in show just like list
    todo.forEach((task, index) => {
        console.log(chalk(`${index + 1}. ${task}`));
        condition = addTodo.secondQuestion
     })
}

