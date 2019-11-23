const cmd = process.argv[2];
const arg = process.argv.splice(3);
const controller = require('./controllers/Controllers');

class Command {
    static readCommand(cmd, arg) {
        switch (cmd) {
            case "order:all":
                controller.all(arg[0], arg[1]);
                break;
            case "order:complete":
                break;
            case "order:create":
                controller.create(arg[0], arg[1], arg[2], arg[3], arg[4]);
                break;
            case "order:omzet":
                break;
            case "order:delete":
                controller.delete(arg[0]);
                break;
        }
    }
}

Command.readCommand(cmd, arg);