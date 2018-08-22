const express = require('express');
const hbs = require('hbs');
var app = express();

app.use(express.static(__dirname + '/public')); // enables static file serving

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome to Some WebSite',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});