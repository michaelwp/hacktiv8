'use strict';

const fs = require('fs');
const dataPath = './data.json';
const commandList = fs.readFileSync('./listCommand.txt', 'utf8').split('\n');
const todoList = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

class Models {
    static cmdList() {
        return commandList;
    }

    static isEmpty() {
        if (todoList.length === 0) {
            return false
        }
        return true
    }

    static completed(status) {
        if (!this.isEmpty()) return false;
        const listCompleteted = todoList.filter((todo) => {
            return todo.completed === status
        });

        return listCompleteted;
    }

    static createdSort() {
        if (!this.isEmpty()) return false;
        const listCreated = todoList.sort((a, b) => {
            return new Date(b.created) - new Date(a.created);
        });

        return listCreated;
    }

    static saveState(data) {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    }
}

module.exports = Models;