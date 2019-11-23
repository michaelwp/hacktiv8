const modelMember = require('../models').Member;
const modelTag = require('../models').Tag;

class controllerMember {
    static viewRawMembers(req, res) {
        modelMember.findAll().then(dataMember => {
            res.send(dataMember)
        }).catch(err => {
            res.send(err);
        })
    }

    static viewRawTags(req, res) {
        modelTag.findAll().then(dataTag => {
            res.send(dataTag)
        }).catch(err => {
            res.send(err);
        })
    }

    static inputMemberPage(req, res) {
        let message = req.query.message || "";
        res.render('members_input', {message});
    }

    static inputMember(req, res) {
        modelMember.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }).then(() => {
            res.redirect('/members/add?message=data successfully saved');
        }).catch(err => {
            res.send(err);
        })
    }

    static viewAllMembers(req, res) {
        const query = {};
        let message = req.query.message || "";
        if (req.query.gold === "1") {
            query.where = {type: 'gold'};
        }
        modelMember.findAll(query).then(dataMember => {
            res.render('members_home', {dataMember: dataMember, message: message});
        }).catch(err => {
            res.send(err);
        })
    }

    static viewOneMembers(req, res) {
        let message = req.query.message || "";
        modelMember.findOne({
            where: {
                id: req.params.id
            }, include: modelTag
        }).then(dataMember => {
            dataMember.setDataValue('level', dataMember.addLevel());
            res.render('members_data', {dataMember: dataMember, message: message});
        }).catch(err => {
            res.send(err);
        })
    }

    static addTags(req, res) {
        let numOftag;
        modelTag.findAndCountAll({
            where: {
                MemberId: req.params.id
            }
        }).then(tag => {
            numOftag = tag.count;
            modelMember.findOne({
                where: {
                    id: req.params.id
                }
            }).then(member => {
                if (member.type === "free" && numOftag >= 3) {
                    throw "Tag max 3 for free member";
                }

                return modelTag.create({
                    name: req.body.tag,
                    MemberId: req.params.id
                })
            }).then(() => {
                res.redirect(`/members/${req.params.id}?message=Tag successfully Add`);
            }).catch(err => {
                res.send(err.errors[0].message);
            });
        });
    }

    static addExp(req, res) {
        let exp = 500;
        modelMember.findOne({
            where: {id: req.params.id}
        }).then(dataMember => {
            exp += dataMember.dataValues.exp;
            return modelMember.update({
                exp: exp
            }, {
                where: {
                    id: req.params.id
                }
            })
        }).then(() => {
            res.redirect(`/members/${req.params.id}?message=XP successfully by 500`);
        }).catch(err => {
            res.send(err.errors[0].message);
        })
    }

    static deleteMember(req, res) {
        modelMember.destroy({
            where: {id: req.params.id}
        }).then(() => {
            return modelTag.destroy({
                where: {MemberId: req.params.id}
            })
        }).then(() => {
            res.redirect(`/members/?message=member successfully deleted`);
        }).catch(err => {
            res.send(err.errors[0].message);
        })
    }

    static upgradeGold(req, res) {
        modelMember.update({
                type: 'gold'
            }, {where: {id: req.params.id}}
        ).then(() => {
            res.redirect(
                `/members/${req.params.id}?message=member type successfully upgraded to Gold`);
        }).catch(err => {
            res.send(err.errors[0].message);
        })
    }

    static membersCount(req, res) {
        modelMember.findAndCountAll().then(dataMember => {
            res.render('home', {dataMember});
        })
    }

}

module.exports = controllerMember;