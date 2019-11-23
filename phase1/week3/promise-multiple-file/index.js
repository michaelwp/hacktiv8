const fs = require('fs');

function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function readFilePromise(file) {
    // psst, the promise should be around here...
    return new Promise((res, rej) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                rej(`Error while reading file !!! ${file}`);
            } else {
                res(JSON.parse(data));
            }
        })
    })
}

function matchParentsWithChildrens(parentFileName, childrenFileName) {
    // your code here... (p.s. readFilePromise function(s) should be around here..)
    let parentData;
    readFilePromise(parentFileName).then(res => {
        parentData = res;
        return readFilePromise(childrenFileName)
    }).then(res => {
        parentData.forEach((item) => {
            sleep(5000);
            item.children = res.filter((child) => {
                return child.family === item.last_name;
            });
            console.log(item);
        });
    }).catch(err => console.log(err));
}

matchParentsWithChildrens('./parents.json', './childrens.json');
console.log("Notification : Data sedang diproses !");
sleep(5000);

// for Release 2
matchParentsWithChildrens('./parents.json', './not_a_real_file.json');
matchParentsWithChildrens('./not_a_real_file.json', './also_not_a_real_file.json');