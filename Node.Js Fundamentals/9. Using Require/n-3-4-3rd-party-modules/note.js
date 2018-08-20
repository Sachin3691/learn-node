console.log('starting note.js');

// ==================== NOTEs about Module and Export ======================
//console.log(module); // Helps Exploring the module and its 
// ==== OUTPUT ====
// Module {
//     id:
//      'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\n-3-3-require-own-files\\note.js',
//     exports: {},
//     parent:
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename:
//         'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\n-3-3-require-own-files\\app.js',
//        loaded: false,
//        children: [ [Circular] ],
//        paths:
//         [ 'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\n-3-3-require-own-files\\node_modules',
//           'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\node_modules',
//           'C:\\Learning\\Node\\Node.Js Fundamentals\\node_modules',
//           'C:\\Learning\\Node\\node_modules',
//           'C:\\Learning\\node_modules',
//           'C:\\node_modules' ] },
//     filename:
//      'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\n-3-3-require-own-files\\note.js',
//     loaded: false,
//     children: [],
//     paths:
//      [ 'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\n-3-3-require-own-files\\node_modules',
//        'C:\\Learning\\Node\\Node.Js Fundamentals\\9. Using Require\\node_modules',
//        'C:\\Learning\\Node\\Node.Js Fundamentals\\node_modules',
//        'C:\\Learning\\Node\\node_modules',
//        'C:\\Learning\\node_modules',
//        'C:\\node_modules' ] }

module.exports.age = 25;

// module.exports.addNote =  function() {

// };

//========== OR===================
module.exports.addNote = () => {
    console.log('Add Notes');
    return "New Note";
};

module.exports.addNotePages = (a, b) => {

    return a + b;
};