"use strict";

const fs = require('fs');

class Person {
    // Look at the above CSV file
    // What attributes should a Person object have?
    constructor(
        first_name, last_name, email, phone
    ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
    }
}

class PersonParser {

    constructor(file) {
        this._path = './';
        this._file = file;
        this._people = null;
    }

    get people() {
        return this._people
    }

    get file() {
        return this._file;
    }

    set people(file) {
        let person = fs.readFileSync(this._path + file, {encoding: 'utf-8'});
        this._people = person.split('\n');
    }

    set addPerson(personObj) {
        let id = Number(this._people[this._people.length-1].split(",")[0]) + 1;

        let joinData = [
            id,
            personObj.first_name,
            personObj.last_name,
            personObj.email,
            personObj.phone,
            new Date().toISOString()
        ].join(",");

        this._people.push(joinData);
    }

    save() {
        fs.writeFileSync(this._path + this._file, this._people.join('\n'));
    }

}

let parser = new PersonParser('people.csv');
parser.people = parser.file;
console.log(`There are ${parser.people.length} people in the file '${parser.file}'.`);

let people = new Person(
    'Sarah',
    'Waters',
    'nonummy.ac.feugiat@diamSed.com',
    '1-187-134-2333'
);

parser.addPerson = people;
parser.save();
