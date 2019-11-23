const Table = require('cli-table');
const chalk = require('chalk');
const Views = require('./Views');
const Article = new Table({
    head: [
        chalk.bold('Title'),
        chalk.bold('Body'),
        chalk.bold('Id_author'),
        chalk.bold('Id_tag')
    ]
});

class ViewsArticle {
    static showDataArticleAll(data) {
        data.forEach(e => {
            Article.push([
                chalk.yellow(e.dataValues.title),
                chalk.yellow(e.dataValues.body),
                chalk.yellow(e.dataValues.id_author),
                chalk.yellow(e.dataValues.id_tag)
            ])
        });
        Views.showMsg(Article.toString());
    }

    static showDataArticleOne(data) {
        Article.push([
            chalk.yellow(data.title),
            chalk.yellow(data.body),
            chalk.yellow(data.id_author),
            chalk.yellow(data.id_tag)
        ]);
        Views.showMsg(Article.toString());
    }
}

module.exports = ViewsArticle;