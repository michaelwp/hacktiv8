const Table = require('cli-table');
const chalk = require('chalk');
const Views = require('./Views');
const Tag = new Table({
    head: [chalk.bold('Name')]
});

class ViewsTag {
    static showDataTagAll(data) {
        data.forEach(e => {
            Tag.push([e.dataValues.name])
        });
        Views.showMsg(Tag.toString());
    }

    static showDataTagOne(data) {
        Tag.push([data.name]);
        Views.showMsg(chalk.yellow(Tag.toString()));
    }
}

module.exports = ViewsTag;