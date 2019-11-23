'use strict';

const express = require('express');
const app = express();
const members = require('./routes/membersRoute');
const memberTypeColor = require('./helpers/memberTypeColor');
const controllerMembers = require('./controllers/controllerMembers');

// set view engine using ejs
app.set('view engine', 'ejs');

// set router route root
app.use('/members', members);

//home
app.get('/', controllerMembers.membersCount);

// set locals function
app.locals.memberTypeColor = memberTypeColor;

// set listening
app.listen(3000, () => {
    console.log('app listen on port 3000');
});