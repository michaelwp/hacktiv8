const fs = require('fs');
const dataTeachers = fs.readFileSync(
    './teachers.csv', 'utf8').split('\n');
const seedData = [];

dataTeachers.forEach(data => {
    let dataSplit = data.split(',');
    seedData.push({
        first_name: dataSplit[0],
        last_name: dataSplit[1],
        email: dataSplit[2],
        createdAt: new Date(),
        updatedAt: new Date()
    })
});

module.exports = seedData;