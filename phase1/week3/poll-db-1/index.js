const command = process.argv[2];
const tableName = process.argv[3];
const data = process.argv[4];
const id = process.argv[5];
const Create = require('./Controllers/Create');
const Update = require('./Controllers/Update');
const Delete = require('./Controllers/Delete');

class Command {
    static readCommand(command) {
        switch (command) {
            case 'create':
                if (!tableName || !data) {
                    console.log('table name, data are mandatory !!!');
                    return;
                }

                Create.createData(tableName, data.split(","));
                break;
            case 'update':
                if (!tableName || !data || !id) {
                    console.log('table name, data, id are mandatory !!!');
                    return;
                }

                if (isNaN(id)) {
                    console.log('id must a number !!!');
                    return;
                }

                const objItem = {};
                data.split(",").forEach((item) => {
                    let col = item.split(":")[0];
                    let val = item.split(":")[1];
                    objItem[col] = val;
                });
                Update.updateData(tableName, objItem, id);
                break;
            case 'delete':
                if (!tableName || !data) {
                    console.log('table name, id are mandatory !!!');
                    return;
                }

                Delete.deleteData(tableName, data);
                break;
        }
    }
}

Command.readCommand(command);
