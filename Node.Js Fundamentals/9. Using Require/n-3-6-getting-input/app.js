console.log('starting app.js');

const _ = require('lodash');
const fs = require('fs');

const notes = require('./note.js');


var command = process.argv[2];
console.log('Command: ', command);

console.log(process.argv);


if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}





