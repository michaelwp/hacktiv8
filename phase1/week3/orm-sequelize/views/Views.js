class Views {
    static showMsg(msg) {
        console.log(msg);
    }

    static help() {
        console.log('====================== Author Command ======================');
        console.log('author:add <firstname> <lastname> <religion> <gender> <age>');
        console.log('author:readone <id author>');
        console.log('author:readall');
        console.log('author:update <id author> <field> <value>');
        console.log('author:delete <id author>');
        console.log('======================== Tag Command =======================');
        console.log('tag:add <name>');
        console.log('tag:readone <id tag>');
        console.log('tag:readall');
        console.log('tag:update <id tag> <value>');
        console.log('tag:delete <id tag>');
        console.log('======================== Tag Article =======================');
        console.log('article:add <title> <body> <id author> <id tag>');
        console.log('article:readone <id article>');
        console.log('article:readall');
        console.log('article:update <id article> <field> <value>');
        console.log('article:delete <id article>');
        console.log('============================================================');
    }
}

module.exports = Views;