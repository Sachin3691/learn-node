console.log('starting app.js');

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./note.js');

const argv = yargs.argv;

var command = process.argv[2];
console.log('Command: ', command);

console.log('Yargs: ', argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) { // if(node === undefined)
        console.log('Note Created');
        notes.logNote(note); //refactored
    } else {
        console.log('Note title taken');
    }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) { // if(node === undefined)
        console.log('Note Found');
        notes.logNote(note); //refactored
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? 'Note was removed.' : 'Note was not removed.';
    console.log(msg);
} else {
    console.log('Command not recognized');
}





