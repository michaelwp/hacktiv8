'use strict';
const fs = require('fs');
const command = process.argv[2];
const parameters = process.argv.slice(3);

switch (command) {
    case 'register':
        // do something
        registerPlayer(parameters[0]);
        break;
    case 'login':
        // do something
        login(parameters[0]);
        break;
    case 'fight':
        // do something
        fight();
        break;
    case 'save':
        // do something
        saveProgress();
        break;
    case 'logout':
        // do something
		logout();
        break;
}


function registerPlayer(name) {
    // code here
	const jsonFile = loadFromFile();
	const playersRegister = jsonFile['players'];

    if (name === undefined) {
        console.log('Welcome to AdventureGame, please input register [playerName]');
        return
    }

    if (playersRegister.length > 0) {
        for (let i = 0; i < playersRegister.length; i++) {
            if (playersRegister[i].name === name) {
                console.log(`Already registered: ${playersRegister[i].name} lv. ${playersRegister[i].level}`);
                return
            }
        }
    }
    playersRegister.push({name: name, level: 0});
	saveToFile(jsonFile);
    console.log(`Welcome new player ${name}!`);
}

function login(name) {
    // code here
	const jsonFile = loadFromFile();
	const playersRegister = jsonFile['players'];
	const currentPlayer = jsonFile['currentPlayer'];

    if (playersRegister.length > 0) {
        for (let i = 0; i < playersRegister.length; i++) {
            if (playersRegister[i].name === name) {
                currentPlayer.name = playersRegister[i].name;
                currentPlayer.level = playersRegister[i].level;
                console.log(`Login success, welcome ${currentPlayer.name} lv. ${currentPlayer.level}`);
				saveToFile(jsonFile);
                return
            }
        }
    }
    console.log('Player not found, you may register new player or login using another name.');
}

function fight() {
    // code here
	const jsonFile = loadFromFile();
	const currentPlayer = jsonFile['currentPlayer'];

    const status = [
        'lost fight, lost 1 level',
        'survived fight, nothing was gained',
        'won fight, gained 1 level',
        'won fight, gained 2 levels',
        'won fight, gained 3 levels'
    ];

    let randomPoint = Math.floor(Math.random() * 5);
    currentPlayer.level += (randomPoint - 1);
	saveToFile(jsonFile);
    console.log(status[randomPoint])
}

function saveProgress() {
    // code here
	const jsonFile = loadFromFile();
	const playersRegister = jsonFile['players'];
	const currentPlayer = jsonFile['currentPlayer'];

    for (let i = 0; i < playersRegister.length; i++) {
        if (playersRegister[i].name === currentPlayer.name) {
            playersRegister[i].level = currentPlayer.level;
            console.log(`${playersRegister[i].name} saved progress.`);
			saveToFile(jsonFile);
        }
    }
}

function logout() {
    // code here
	const jsonFile = loadFromFile();
	const currentPlayer = jsonFile['currentPlayer'];

	console.log(`${currentPlayer.name} has quit game.`);
	jsonFile['currentPlayer'] = {};

	saveToFile(jsonFile);
}

function loadFromFile() {
    // code here
	const file = './save.json';
	const jsonFile = JSON.parse(fs.readFileSync(file, 'utf8'));
	return jsonFile;
}

function saveToFile(data) {
    // code here
	const fileSave = JSON.stringify(data, null, 4);
	fs.writeFileSync('./save.json', fileSave, 'utf8');
}

