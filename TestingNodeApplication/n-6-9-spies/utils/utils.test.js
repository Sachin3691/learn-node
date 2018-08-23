const expect = require('expect'); // using mjackson expect library

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        });

        it('should async square a numbers', (done) => {   // to enable async calls to test
            utils.asyncSquare(4, (res) => {
                expect(res).toBe(16).toBeA('number');
                done();
            })
        });
    })

    it('should verify first and last names are set', () => {
        var user = {
            location: 'Bangalore',
            age: 25
        };

        var res = utils.setName(user, 'Sachin Thomas');

        expect(res).toInclude({
            firstName: 'Sachin',
            lastName: 'Thomas'
        });
    });
});

