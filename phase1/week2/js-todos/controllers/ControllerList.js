'use strict';

const Views = require('../views/Views');
const Models = require('../models/ModelList');

class ControllerList {
    static action(arg) {
        switch (arg) {
            case "completed":
                const compData = Models.completed(true);
                Views.displayList(compData);
                break;
            case "uncompleted":
                const uncompData = Models.completed(false);
                Views.displayList(uncompData);
                break;
            case "created":
                const createdData = Models.createdSort(false);
                Views.displayList(createdData);
                break;
            default:
                const cmdList = Models.cmdList();
                Views.displayHelp(cmdList);
                break;
        }
    }
}

module.exports = ControllerList;