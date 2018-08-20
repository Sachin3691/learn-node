console.log('starting note.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title: title,
        body: body
    };

    try {
        notes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notes);
    }
    catch (e) { }

    // var duplicateNotes = notes.filter((note)=> {
    //     return note.title === title;
    // } );
    // Same as above
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading from notes:', title);
};

var removeNote = (title) => {
    console.log('Removing note:', title);
};

module.exports = {
    addNote: addNote,
    getAll,
    getNote: readNote,
    removeNote
    //or
    //addNote - if the name of the export value is same as function name.
}
