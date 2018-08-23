const expect = require('expect'); // using mjackson expect library

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    // if(res !== 44) {
    //     throw new Error(`Expected 44 but got ${res}`);
    // }
    expect(res).toBe(44).toBeA('number');
});


// Know More 
// it('should square a number', () => {
//     var res = utils.square(4);
//     // if(res !== 16) {
//     //     throw new Error(`Expected 16 but got ${res}`);
//     // }
//     expect(res).toBe(16).toBeA('number');
// })

// it('should expect some value', () => {
//     ///expect(12).toNotBe(10); // works great with basic datatypes
//     ///expect({name:'Sachin'}).toBe({name:'Sachin'});  // objects cannot be compared using toBe
//     ///expect({name:'Sachin'}).toEqual({name:'Sachin'});  // objects comparision

//     expect([2,3,4]).toInclude(3);
//     expect([2,3,4]).toExclude(5);

//     expect({
//         name: 'Sachin',
//         age: 27,
//         location: 'Bangalore'
//     }).toInclude({
//         age: 27
//     });


//     expect({
//         name: 'Sachin',
//         age: 27,
//         location: 'Bangalore'
//     }).toExclude({
//         age: 24
//     });
// });

it('should verify first and last names are set', () => {
    var user = {
        location: 'Bangalore',
        age: 25
    };

    var res = utils.setName(user, 'Sachin Thomas');

    // expect(res.firstName).toBe('Sachin');
    // expect(res.lastName).toBe('Thomas');

    expect(res).toInclude({
        firstName: 'Sachin',
        lastName: 'Thomas'
    });
});