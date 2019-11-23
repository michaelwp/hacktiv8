'use strict';

class Kue {
    constructor(name, waktuMatang) {
        this._name = name;
        this._waktuMatang = waktuMatang;
        this._status = "mentah"
    }

    get name() {
        return this._name;
    }

    get status() {
        return this._status
    }

    addWaktuPanggang(waktuPanggang) {
        if (waktuPanggang <= 10) {
            this._status = "mentah";
        } else if (waktuPanggang > 5 && waktuPanggang < this._waktuMatang) {
            this._status = "hampir matang";
        } else if (waktuPanggang === this._waktuMatang) {
            this._status = "matang";
        } else if (waktuPanggang > this._waktuMatang) {
            this._status = "hangus";
        }
    }
}

module.exports = Kue;