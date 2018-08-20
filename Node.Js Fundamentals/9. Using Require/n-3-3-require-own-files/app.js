console.log('starting app.js');

const fs = require('fs'); // Loads File system Module
const os = require('os');

const notes = require('./note.js');


// Using Export properties 
//var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are  ${notes.age}` , function(err){  // ` ` - called as Template string 
//     if(err) {
//         console.log('Unable to write to the file');
//     }
// });

var res = notes.addNotePages(5, 5);
console.log(res);
