'use strict';

const Kue = require('./kue');

class KueKeju extends Kue {
    constructor() {
        super('keju', 23);
    }
}

module.exports = KueKeju;