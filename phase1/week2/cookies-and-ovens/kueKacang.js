'use strict';

const Kue = require('./kue');

class KueKacang extends Kue {
    constructor() {
        super('kacang', 20);
    }
}

module.exports = KueKacang;