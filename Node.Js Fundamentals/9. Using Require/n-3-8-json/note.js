console.log('starting note.js');

var addNote = (title, body) => {
    console.log('Adding Note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title)=> {
    console.log('Reading from notes:', title);
};

var removeNote = (title)=> {
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
