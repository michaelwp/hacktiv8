'use strict';
const Contact = require('../models/contact');
const Group = require('../models/group');
const ContactGroup = require('../models/contact-group');
const Views = require('../views/Views');

class Controller {
    static createContact(arg) {
        if (!arg[0] || !arg[1] || !arg[2] || !arg[3] || !arg[4]) {
            Views.showMsg('all field are mandatory !!!');
            return
        }

        Contact.create(
            [arg[0], arg[1], arg[2], arg[3], arg[4]]
        ).then((res) => {
            Views.showMsg(res);
        }).catch((err) => {
            Views.showMsg(err);
        })
    }

    static createGroup(arg) {
        if (!arg[0]) {
            Views.showMsg('group name is mandatory !!!');
            return
        }

        Group.create([arg[0]])
            .then((res) => {
                Views.showMsg(res);
            }).catch((err) => {
            Views.showMsg(err);
        })
    }

    static addGroup(arg) {
        if (!arg[0] || !arg[1]) {
            Views.showMsg('all field are mandatory !!!');
            return
        }

        const data = [];
        this.findGroup(arg[0]).then(group => {
            data.unshift(group.id);
            return this.findContact(arg[1])
        }).then(contact => {
            data.unshift(contact.id);
            return ContactGroup.create(data)
        }).then(res => {
            Views.showMsg(res);
        }).catch(err => Views.showMsg(err));
    }

    static findGroup(groupName) {
        return new Promise((resolve, reject) => {
            Group.findOne([groupName])
                .then((res) => {
                    if (!res) throw('Group not found !!!');
                    resolve(res)
                })
                .catch((err) => reject(err))
        })
    }

    static deleteContactGroup(field, id) {
        ContactGroup.findOne(field, id)
            .then(dataContactGroup => {
                if (!dataContactGroup) {
                    throw new Error('contact group not found !!!');
                }
                return ContactGroup.remove([dataContactGroup.id])
            }).catch(err => {
            Views.showMsg(err);
        })
    }

    static findContact(contactPhone) {
        return new Promise((resolve, reject) => {
            Contact.findOne([contactPhone])
                .then((res) => {
                    if (!res) throw("Contact not found !!!");
                    resolve(res)
                })
                .catch((err) => reject(err))
        })
    }

    static viewContact() {
        return new Promise((resolve, reject) => {
            Contact.read().then((res) => {
                Views.showMsg(res);
            }).catch((err) => {
                Views.showMsg(err);
            })
        })
    }

    static updateContact(arg) {
        if (!arg[0] || !arg[1] || !arg[2]) {
            Views.showMsg('all field are mandatory !!!');
            return
        }

        Contact.findOne(arg[0]).then((dataContact) => {
            if (!dataContact) {
                throw ('phone number not found !!!');
            }
            return Contact.update(arg[1], [arg[2], dataContact.id])
        }).then(res => {
            Views.showMsg(res);
        }).catch((err) => {
            Views.showMsg(err);
        })
    }

    static deleteContact(arg) {
        if (!arg[0]) {
            Views.showMsg('phone number are mandatory !!!');
            return
        }

        this.findContact(arg[0]).then(dataContact => {
            Contact.remove(dataContact.id).then(resContact => {
                Views.showMsg(resContact);
                return ContactGroup.findOne('id_contact', dataContact.id)
            }).then(resContactGroup => {
                return ContactGroup.remove(resContactGroup.id)
            }).then(resDelContactGroup => {
                Views.showMsg(resDelContactGroup);
            }).catch(err => Views.showMsg(err))
        }).catch(err => Views.showMsg(err))
    }
}

module.exports = Controller;

