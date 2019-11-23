const express = require('express');
const router = express.Router();
const controllerMembers = require('../controllers/controllerMembers');

// encoded url
router.use(express.urlencoded({extended: true}));

// members Route
router.get('/raw/members', controllerMembers.viewRawMembers);
router.get('/raw/tags', controllerMembers.viewRawTags);
router.get('/add', controllerMembers.inputMemberPage);
router.post('/add', controllerMembers.inputMember);
router.get('/', controllerMembers.viewAllMembers);
router.get('/:id', controllerMembers.viewOneMembers);
router.post('/:id', controllerMembers.deleteMember);
router.post('/:id/createtag', controllerMembers.addTags);
router.post('/:id/addexp', controllerMembers.addExp);
router.post('/:id/upgrade', controllerMembers.upgradeGold);
router.get('/?gold=1', controllerMembers.viewAllMembers);


module.exports = router;