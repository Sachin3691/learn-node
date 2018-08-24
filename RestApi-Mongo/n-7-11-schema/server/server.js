var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./DB/mongoose');
var {Todo} = require('/models/todo');
var {User} = require('/models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
    console.log(req.body);
});

app.listen(3000), ()=> {
    console.log('Started on server port 3000');
};

