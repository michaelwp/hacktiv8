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

    static todoList() {
        if (!this.isEmpty()) return false;
        return todoList;
    }

    static addItem(itemTodo) {
        if (itemTodo) {
            let id = 1;
            if (todoList.length > 0) {
                id = todoList[0].id + 1;
            }

            todoList.unshift({
                id: id,
                task: itemTodo,
                completed: false,
                tag: [],
                created: new Date(Date.now()).toString()
            });

            this.saveState(todoList);
            return `Added "${itemTodo}" to your TODO list ... :)`
        }
        return `No item added ... !`;
    }

    static findById(id) {
        if (!this.isEmpty()) return "Data is empty";
        if (!this.isEmpty()) return false;
        const itemFound = [];
        let isExist = this.checkId(id);
        if (isExist !== false) {
            itemFound.push(isExist.item);
        } else {
            return false;
        }
        return itemFound;
    }

    static deleteById(id) {
        if (!this.isEmpty()) return "Data is empty";
        if (id !== undefined) {
            if (id > todoList.length || id < 1) return "Data is empty";
            const delItem = todoList[id - 1].task;
            todoList.splice(id - 1, 1);
            this.saveState(todoList);
            return `delete "${delItem}" from your TODO list ... :)`
        }
    }

    static completed(id, status) {
        if (!this.isEmpty()) return false;
        if (id !== undefined) {
            if (id > todoList.length || id < 1) return false;
            todoList[id - 1].completed = status;
            this.saveState(todoList);
            return todoList;
        }
    }

    static tag(id, tagList) {
        if (!this.isEmpty()) return false;
        if (id !== undefined) {
            if (id > todoList.length || id < 1) return false;
            todoList[id-1].tag = tagList;
            this.saveState(todoList);
            return todoList;
        }
    }

    static saveState(data) {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    }
}

module.exports = Models;