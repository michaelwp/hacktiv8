'use strict';

const command = process.argv[2];
const argument = process.argv.splice(3);
const Controller = require('./controllers/Controller');

class Command {
    static readCommand(cmd, arg) {
        Controller.command(cmd, arg);
    }
}

Command.readCommand(command, argument);