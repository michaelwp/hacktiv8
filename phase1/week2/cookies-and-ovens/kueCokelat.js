'use strict';

const Kue = require('./kue');

class KueCokelat extends Kue {
    constructor() {
        super('cokelat', 27);
    }
}

module.exports = KueCokelat;