const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials'); // enables partial view

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // enables static file serving

hbs.registerHelper('getCurrentYear', () => { 
    return new Date().getFullYear();
});

hbs.registerHelper('scremIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome to Some WebSite',
       // currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        //currentYear: new Date().getFullYear()
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