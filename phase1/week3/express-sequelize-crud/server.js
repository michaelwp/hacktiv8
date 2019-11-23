'use strict';

const server = require('express')();
const routes = require('./routes');
const bodyParser = require('body-parser');

server.use('/', routes);
server.set('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});