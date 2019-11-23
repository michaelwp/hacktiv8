const Author = require('../models').author;
const Views = require('../views/Views');
const ViewsAuthor = require('../views/ViewsAuthor');

class authorController {
    static add(firstname, lastname, religion, gender, age) {
        if (!firstname || !lastname || !religion || !gender || !age) {
            Views.showMsg("All field are mandatory !!!");
            return
        }

        Author.create({
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            religion: religion.toLowerCase(),
            gender: gender.toLowerCase(),
            age: age
        }).then(dataAuthor => {
            ViewsAuthor.showDataAuthorOne(dataAuthor.dataValues);
        }).catch(err => Views.showMsg(err))
    }

    static readAll() {
        Author.findAll().then(dataAuthor => {
            ViewsAuthor.showDataAuthorAll(dataAuthor);
        }).catch(err => Views.showMsg(err))
    }

    static readOne(idAuthor) {
        if (!idAuthor) {
            Views.showMsg("Please input the id author !!!");
            return
        }

        Author.findOne({
            where: {id: idAuthor}
        }).then(dataAuthor => {
            if (!dataAuthor) throw("Data not found !!!");
            ViewsAuthor.showDataAuthorOne(dataAuthor.dataValues);
        }).catch(err => Views.showMsg(err))
    }

    static update(idAuthor, field, value) {
        if (!idAuthor || !field || !value) {
            Views.showMsg("All field are mandatory !!!");
            return
        }

        Author.update({
            [field]: value.toLowerCase()
        }, {
            where: {id: idAuthor}
        }).then(updateAuthor => {
            if (!updateAuthor[0]) {
                throw("Data failed to update !!!");
            } else {
                Views.showMsg("Data successfully updated")
            }
        }).catch(err => Views.showMsg(err))
    }

    static delete(idAuthor) {
        if (!idAuthor) {
            Views.showMsg("id author is mandatory !!!");
            return
        }

        Author.destroy({
            where: {id: idAuthor}
        }).then(author => {
            if (!author) {
                throw("Data failed to remove !!!")
            } else {
                Views.showMsg("Data successfully removed")
            }
        }).catch(err => Views.showMsg(err))
    }
}

module.exports = authorController;
