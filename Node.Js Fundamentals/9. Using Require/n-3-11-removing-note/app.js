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
   
    if(note){ // if(node === undefined)
        console.log('Note Created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? 'Note was removed.' : 'Note was not removed.';
    console.log(msg);
} else {
    console.log('Command not recognized');
}





