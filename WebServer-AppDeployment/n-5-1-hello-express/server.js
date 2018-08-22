const express = require('express');

var app = express();

app.get('/', (req, res) => {
   // res.send('<h1>Hello Express</h1>'); // Automatically adds the content-type to text/html
   res.send({
       name: 'Sachin',
       likes: [
           'Music',
           'Singing'
       ]
   });
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    });
})

app.listen(3000);