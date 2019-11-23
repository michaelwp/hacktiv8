const Tag = require('../models').tag;
const Views = require('../views/Views');
const ViewsTag = require('../views/ViewsTag');

class tagController {
    static add(name) {
        if (!name) {
            Views.showMsg("tag name is mandatory !!!");
            return
        }

        Tag.create({
            name: name.toLowerCase()
        }).then(data => {
            ViewsTag.showDataTagOne(data.dataValues)
        }).catch(err => Views.showMsg(err))
    }

    static readAll() {
        Tag.findAll().then(data => {
            ViewsTag.showDataTagAll(data)
        }).catch(err => Views.showMsg(err))
    }

    static readOne(idTag) {
        if (!idTag) {
            Views.showMsg("Please input the tag id !!!");
            return
        }

        Tag.findOne({
            where: {id: idTag}
        }).then(data => {
            if (!data) throw("Data not found !!!");
            ViewsTag.showDataTagOne(data.dataValues)
        }).catch(err => Views.showMsg(err))
    }

    static update(idTag, value) {
        if (!idTag || !value) {
            Views.showMsg("All field are mandatory !!!");
            return
        }

        Tag.update({
            name: value.toLowerCase()
        }, {
            where: {id: idTag}
        }).then(update => {
            if (!update[0]) {
                throw("Data failed to update !!!");
            } else {
                Views.showMsg("Data successfully updated")
            }
        }).catch(err => Views.showMsg(err))
    }

    static delete(idTag) {
        if (!idTag) {
            Views.showMsg("id tag is mandatory !!!");
            return
        }

        Tag.destroy({
            where: {id: idTag}
        }).then(remove => {
            if (!remove) {
                throw("Data failed to remove !!!")
            } else {
                Views.showMsg("Data successfully removed")
            }
        }).catch(err => Views.showMsg(err))
    }
}

module.exports = tagController;
