'use strict';

class Views {
    static displayHelp(cmdList) {
        console.log("command list : ");
        cmdList.forEach((cmd) => {
            console.log(`- \x1b[32m${cmd}\x1b[0m`);
        });
        console.log("");
    }

    static displayList(todoList) {
        if (!todoList) {
            this.displayMessage("Data is empty");
            return
        }
        console.log("Todo list : ");
        todoList.forEach((todo, index) => {
            let compSign = '[ ]';
            let green = '\x1b[32m';
            let red = '\x1b[31m';
            let reset = '\x1b[0m';
            let task = todo['task'];
            let taskTag = todo['tag'];

            if (todo.completed === true) {
                compSign = `[${red}x${reset}]`;
            }

            console.log(`${index + 1}. ${compSign} ${green}${task} ${reset}(${taskTag})`);
        });
        console.log("");
    }

    static displayMessage(msg) {
        console.log(msg);
    }
}

module.exports = Views;