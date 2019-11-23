'use strict';

const fs = require('fs');
const dataPath = './data.json';
const todoList = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

class Models {
    static tagFilter(tag) {
        if (todoList.length === 0) return false;
        if (!tag) return false;

        const tagFilterRes = [];

        todoList.forEach((task) => {
            task.tag.forEach((tagItem) => {
                if (tagItem === tag) tagFilterRes.push(task);
            });
        });
        return (tagFilterRes);
    }
}

module.exports = Models;