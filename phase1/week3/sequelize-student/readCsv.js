'use strict';

const fs = require('fs');
const fileCsv = fs.readFileSync('./students.csv', 'utf8');

const objItems = [];
const csvSplit = fileCsv.split('\n');
csvSplit.forEach((row) => {
    let rowSplit = row.split(",");
    objItems.push(
        {
            first_name: rowSplit[1],
            last_name: rowSplit[2],
            gender: rowSplit[3],
            birthday: rowSplit[4],
            email: rowSplit[5],
            phone: rowSplit[6],
            createdAt: new Date(),
            updatedAt: new Date()
        }
    )
});
console.log(objItems);
module.exports = objItems;