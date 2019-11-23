'use strict';

class Validation {
    static isEmpty(fieldName, field) {
        let isEmpty = false;

        field.find((el) => {
            if (!el || el.length === 0) isEmpty = true;
        });
        return [isEmpty, `${fieldName} are mandatory, must not be empty !!!`];
    }

    static isRegistered(fieldName, value, data) {
        let isRegistered = true;
        let isRegisteredMsg = `${fieldName} ${value} has been registered !!!`;

        const isExist = data.find((el) => {
            return el[fieldName] === value;
        });

        if (!isExist) {
            isRegistered = false;
            isRegisteredMsg = `${fieldName} ${value} not found !!!`;
        }
        return [isRegistered, isRegisteredMsg, isExist];
    }
}

module.exports = Validation;