const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');  // Insert 

describe('App', ()=> {
    var db = {
        saveUser: expect.createSpy()
    };
    
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        //spy();
        spy('Sachin', 25);
        //expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Sachin', 25);
    });

    it('Should call saveUser with User object', () => {
        var email = 'thomas@sachin.com';
        var password = '1234';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password }); // make sure the names are same
    })
})