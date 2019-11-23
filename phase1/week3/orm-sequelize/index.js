const command = process.argv[2];
const argument = process.argv.splice(3);
const authorController = require('./controllers/authorController');
const articleController = require('./controllers/articleController');
const tagController = require('./controllers/tagController');
const Views = require('./views/Views');

const readCommand = (cmd, arg) => {
    switch (cmd) {
        case "author:add":
            authorController.add(
                arg[0], arg[1],
                arg[2], arg[3],
                arg[4]);
            break;
        case "author:readone":
            authorController.readOne(arg[0]);
            break;
        case "author:readall":
            authorController.readAll();
            break;
        case "author:update":
            authorController.update(arg[0], arg[1], arg[2]);
            break;
        case "author:delete":
            authorController.delete(arg[0]);
            break;

        // article
        case "article:add":
            articleController.add(
                arg[0], arg[1],
                arg[2], arg[3]);
            break;
        case "article:readone":
            articleController.readOne(arg[0]);
            break;
        case "article:readall":
            articleController.readAll();
            break;
        case "article:update":
            articleController.update(arg[0], arg[1], arg[2]);
            break;
        case "article:delete":
            articleController.delete(arg[0]);
            break;

        // tag
        case "tag:add":
            tagController.add(arg[0]);
            break;
        case "tag:readone":
            tagController.readOne(arg[0]);
            break;
        case "tag:readall":
            tagController.readAll();
            break;
        case "tag:update":
            tagController.update(arg[0], arg[1]);
            break;
        case "tag:delete":
            tagController.delete(arg[0]);
            break;

        // help
        default:
            Views.help();
            break;
    }
};

readCommand(command, argument);