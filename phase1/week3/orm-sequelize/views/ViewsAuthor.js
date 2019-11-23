const Table = require('cli-table');
const chalk = require('chalk');
const Views = require('./Views');
const Author = new Table({
    head: [
        chalk.bold('First Name'),
        chalk.bold('Last Name'), chalk.bold('Religion'),
        chalk.bold('Gender'),
        chalk.bold('Age')
    ]
});

class ViewsAuthor {
    static showDataAuthorAll(data) {
        data.forEach(e => {
            Author.push([
                chalk.yellow(e.dataValues.firstname),
                chalk.yellow(e.dataValues.lastname),
                chalk.yellow(e.dataValues.religion),
                chalk.yellow(e.dataValues.gender),
                chalk.yellow(e.dataValues.age)
            ])
        });
        Views.showMsg(Author.toString());
    }

    static showDataAuthorOne(data) {
        Author.push([
            chalk.yellow(data.firstname),
            chalk.yellow(data.lastname),
            chalk.yellow(data.religion),
            chalk.yellow(data.gender),
            chalk.yellow(data.age)
        ]);
        Views.showMsg(Author.toString());
    }
}

module.exports = ViewsAuthor;