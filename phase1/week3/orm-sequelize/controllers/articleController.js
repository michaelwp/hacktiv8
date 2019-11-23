const Article = require('../models').article;
const Author = require('../models').author;
const Tag = require('../models').tag;
const Views = require('../views/Views');
const ViewsArticle = require('../views/ViewsArticle');

class articleController {
    static add(title, body, idAuthor, idTag) {
        if (!title || !body || !idAuthor || !idTag) {
            Views.showMsg("All field are mandatory !!!");
            return
        }

        Author.findOne({
            where: {id: idAuthor}
        }).then(dataAuthor => {
            if (!dataAuthor) throw ("Data author not found !!!");
            return Tag.findOne({where: {id: idTag}})
        }).then(dataTag => {
            if (!dataTag) throw ("Data tag not found !!!");
            return Article.create({
                title: title.toLowerCase(),
                body: body.toLowerCase(),
                id_author: idAuthor,
                id_tag: idTag
            })
        }).then(data => {
            this.readOne(data.dataValues.id);
            // Views.showMsg(data.dataValues);
        }).catch(err => Views.showMsg(err));
    }

    static readAll() {
        Article.findAll().then(data => {
            ViewsArticle.showDataArticleAll(data);
        }).catch(err => Views.showMsg(err))
    }

    static readOne(idArticle) {
        if (!idArticle) {
            Views.showMsg("Please input the article id !!!");
            return
        }

        Article.findOne({
            where: {id: idArticle}
        }).then(data => {
            if (!data) throw("Data not found !!!");
            ViewsArticle.showDataArticleOne(data.dataValues);
        }).catch(err => Views.showMsg(err))
    }

    static update(idArticle, field, value) {
        if (!idArticle || !field || !value) {
            Views.showMsg("All field are mandatory !!!");
            return
        }

        Article.update({
            [field]: value.toLowerCase()
        }, {
            where: {id: idArticle}
        }).then(update => {
            if (!update[0]) {
                throw("Data failed to update !!!");
            } else {
                Views.showMsg("Data successfully updated")
            }
        }).catch(err => Views.showMsg(err))
    }

    static delete(idArticle) {
        if (!idArticle) {
            Views.showMsg("id article is mandatory !!!");
            return
        }

        Article.destroy({
            where: {id: idArticle}
        }).then(remove => {
            if (!remove) {
                throw("Data failed to remove !!!")
            } else {
                Views.showMsg("Data successfully removed")
            }
        }).catch(err => Views.showMsg(err))
    }
}

module.exports = articleController;
