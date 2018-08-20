console.log('starting app.js');

// FROM NPM library
const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');


// FROM user defined
const notes = require('./note.js');


const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);

console.log('Yargs: ', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}





