console.log('starting note.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e) {
        return [];
     }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes(); // refactored
    
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes); // refactored
        return note;
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
