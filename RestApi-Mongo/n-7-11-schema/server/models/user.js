var {mongoose} = require('./DB/mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

module.exports = {User};