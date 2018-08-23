var db = require('./db')

module.exports.handleSignUp = (email, password) => {
    //check if User exists
   
    db.saveUser({ email, password });

    //Send welcome email
};