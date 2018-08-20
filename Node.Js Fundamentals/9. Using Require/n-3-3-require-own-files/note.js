console.log('starting note.js');

module.exports.age = 25;

module.exports.addNote = () => {
    console.log('Add Notes');
    return "New Note";
};

module.exports.addNotePages = (a, b) => {

    return a + b;
};
