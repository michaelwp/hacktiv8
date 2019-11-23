'use strict';

const command = process.argv[2];
const argument = process.argv.splice(3);
const Controller = require('./controllers/Controller');

class Command {
    static readCommand(cmd, arg) {
        switch (cmd) {
            case "create:contact":
                Controller.createContact(arg);
                break;
            case "create:group":
                Controller.createGroup(arg);
                break;
            case "add:group":
                Controller.addGroup(arg);
                break;
            case "view:contact":
                Controller.viewContact();
                break;
            case "update:contact":
                Controller.updateContact(arg);
                break;
            case "delete:contact":
                Controller.deleteContact(arg);
                break;
        }
    }
}

Command.readCommand(command, argument);
