// var square = (x) => {
//     var result = x*x;
//     return result;
// };

//Same as below

//var square = (x) => x*x ;

// Also 

var square = x => x*x;

console.log(square(9));

var user = {
    name: 'Sachin',
    sayHi: () => {
        console.log(arguments);  // returns the global args object. not the local.
        console.log(`Hi. I'm ${this.name}`);   // this is not accessible in arraow function.
    },
    sayHiAlt () { // use this when using object methods
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);   // this works
    }
};

user.sayHi();

user.sayHiAlt(1, 2, 3);


