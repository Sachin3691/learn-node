var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res
        .status(404)
        .send({
            error: 'Page not found',
            name: 'Todo App v1.0'
        });
});

app.get('/users', (req, res) => {
    res
        .status(200)
        .send([{
            name: 'Sachin',
            age: 27
        },{
            name: 'Thomas',
            age: 28
        }]);
});

app.listen(3000);

module.exports.app = app;