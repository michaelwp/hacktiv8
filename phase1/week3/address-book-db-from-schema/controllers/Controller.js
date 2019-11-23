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

        Contact.create([arg[0], arg[1], arg[2], arg[3], arg[4]], (err, data) => {
            if (err) {
                Views.showMsg(err);
            } else {
                Views.showMsg(data);
            }
        })
    }

    static createGroup(arg) {
        if (!arg[0]) {
            Views.showMsg('group name is mandatory !!!');
            return
        }

        Group.create([arg[0]], (err, data) => {
            if (err) {
                Views.showMsg(err);
            } else {
                Views.showMsg(data);
            }
        })
    }

    static addGroup(arg) {
        if (!arg[0] || !arg[1]) {
            Views.showMsg('all field are mandatory !!!');
            return
        }

        this.findGroup(arg[0], (err, dataGroup) => {
            if (err) {
                Views.showMsg(err);
            } else {
                if (!dataGroup) {
                    Views.showMsg('group name not found !!!');
                } else {
                    this.findContact(arg[1], (err, dataContact) => {
                        if (err) {
                            Views.showMsg(err);
                        } else {
                            if (!dataContact) {
                                Views.showMsg('phone number not found !!!');
                            } else {
                                ContactGroup.create([dataContact.id, dataGroup.id],
                                    (err, dataContactGroup) => {
                                        if (err) {
                                            Views.showMsg(err);
                                        } else {
                                            Views.showMsg(dataContactGroup);
                                        }
                                    })
                            }
                        }
                    })
                }
            }
        });
    }

    static findGroup(groupName, cb) {
        Group.findOne([groupName], (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static findContactGroup(field, id, cb) {
        ContactGroup.findOne(field, [id], (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static deleteContactGroup(field, id) {
        ContactGroup.findOne(field, id, (err, dataFindOne) => {
            if (err) {
                Views.showMsg(err);
            } else {
                if (!dataFindOne) {
                    Views.showMsg('contact group not found !!!');
                } else {
                    ContactGroup.remove([dataFindOne.id], (err, data) => {
                        if (err) {
                            Views.showMsg(err);
                        } else {
                            Views.showMsg(data);
                        }
                    })
                }
            }
        });
    }

    static findContact(contactPhone, cb) {
        Contact.findOne([contactPhone], (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static viewContact() {
        Contact.read((err, data) => {
            if (err) {
                Views.showMsg(err);
            } else {
                Views.showMsg(data);
            }
        })
    }

    static updateContact(arg) {
        if (!arg[0] || !arg[1] || !arg[2]) {
            Views.showMsg('all field are mandatory !!!');
            return
        }

        Contact.findOne(arg[0], (err, dataContact) => {
            if (err) {
                Views.showMsg(err);
            } else {
                if (!dataContact) {
                    Views.showMsg('phone number not found !!!');
                } else {
                    Contact.update(arg[1], [arg[2], dataContact.id], (err, data) => {
                        if (err) {
                            Views.showMsg(err);
                        } else {
                            Views.showMsg(data);
                        }
                    })
                }
            }
        })
    }

    static deleteContact(arg) {
        if (!arg) {
            Views.showMsg('phone number are mandatory !!!');
            return
        }

        Contact.findOne(arg, (err, dataContact) => {
            if (err) {
                Views.showMsg(err);
            } else {
                if (!dataContact) {
                    Views.showMsg('phone number not found !!!');
                } else {
                    Contact.remove([dataContact.id], (err, data) => {
                        if (err) {
                            Views.showMsg(err);
                        } else {
                            Views.showMsg(data);
                            this.deleteContactGroup('id_contact', dataContact.id);
                        }
                    })
                }
            }
        })
    }
}

module.exports = Controller;

