var mongoose =  require('mongoose');

mongoose.Promise = global.Promise; // Setup to use Promise instead of Callbacks
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed : {   
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

var newTodo = new Todo({
    text: 'Cook dinner',
    completed: false,
    completedAt: 123
});


newTodo.save().then((doc)=> {
    console.log('Save todo', doc);
},(e)=> {
    console.log(e);
})