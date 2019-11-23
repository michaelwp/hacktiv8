'use strict';

const Controller = require('./controllers/Controllers');
const ControllerList = require('./controllers/ControllerList');
const ControllerFilter = require('./controllers/ControllerFilter');
const commandOri = (process.argv[2] || "help");
const itemTodo = (process.argv.splice(3));
const command = commandOri.split(":");

class Command {
    static readCommand(command, arg) {
        if (command.length > 1) {
            switch (command[0]){
                case "list":
                    ControllerList.action(command[1]);
                    break;
                case "filter":
                    ControllerFilter.action(command[1]);
            }
            return
        }
        Controller.action(command[0], arg);
    }
}

Command.readCommand(command, itemTodo);