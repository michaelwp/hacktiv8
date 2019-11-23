'use strict';

const Views = require('../views/Views');
const Models = require('../models/Models');

class Controller {
    static action(command, arg) {
        switch (command) {
            case "list":
                const data = Models.todoList();
                Views.displayList(data);
                break;
            case "add":
                const addMsg = Models.addItem(arg[0]);
                Views.displayMessage(addMsg);
                break;
            case "findbyid":
                const itemFound = Models.findById(arg[0]);
                Views.displayList(itemFound);
                break;
            case "delete":
                const delMsg = Models.deleteById(arg[0]);
                Views.displayMessage(delMsg);
                break;
            case "complete":
                const compData = Models.completed(arg[0], true);
                Views.displayList(compData);
                break;
            case "uncomplete":
                const uncompData = Models.completed(arg[0], false);
                Views.displayList(uncompData);
                break;
            case "tag":
                const tagData = Models.tag(arg[0], arg.splice(1));
                Views.displayList(tagData);
                break;
            default:
                const cmdList = Models.cmdList();
                Views.displayHelp(cmdList);
                break;
        }
    }
}

module.exports = Controller;