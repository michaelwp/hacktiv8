const fs = require('fs');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function match_data(parent_file, children_file) {
    // Code here
    fs.readFile(parent_file, 'utf-8', function (err, data) {
        if (err) {
            console.log('error');
        } else {
            sleep(5000);
            const parent_data = JSON.parse(data);
            fs.readFile(children_file, 'utf-8', function (err, data) {
                if (err) {
                    console.log('error');
                } else {
                    sleep(5000);
                    const child_data = JSON.parse(data);
                    parent_data.forEach((parent) => {
                        const family = [];
                        child_data.forEach((child) => {
                            if (child.family === parent.last_name) {
                                family.push(child['full_name'])
                            }
                        });
                        parent.children = family;
                    });
                    console.log(parent_data);
                }
            })
        }
    })
}

match_data('./parents.json', './children.json');
console.log("Notification : Data sedang diproses !");
