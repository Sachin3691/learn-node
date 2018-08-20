console.log('starting app.');

const fs = require('fs'); // Loads File system Module
const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username} !` , function(err){  // ` ` - called as Template string 
    if(err) {
        console.log('Unable to write to the file');
    }
});

//Second way - append file requires a callback
//fs.appendFileSync('greetings.txt', 'Hello world');