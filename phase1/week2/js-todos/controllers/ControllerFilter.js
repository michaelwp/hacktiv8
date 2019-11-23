'use strict';

const Views = require('../views/Views');
const Models = require('../models/ModelFilter');


class ControllerFilter {
    static action(arg) {
        const tagData = Models.tagFilter(arg);
        Views.displayList(tagData);
    }
}

module.exports = ControllerFilter;