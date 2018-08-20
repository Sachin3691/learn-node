const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./note.js');

var titleOptions = {
    describe: 'Title of note.',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new Note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List of notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) { // if(node === undefined)
        console.log('Note Created');
        notes.logNote(note); //refactored
    } else {
        console.log('Note title taken');
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);

    allNotes.forEach((note) => notes.logNote(note));

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