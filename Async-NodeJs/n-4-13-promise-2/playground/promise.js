var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers.');
            }
        }, 1500);
    })
};


// asyncAdd(5, '7')
//     .then((result) => {
//         console.log(result);
//         return asyncAdd(result,33) // Chaining of Promises
//             .then((result) => {
//                 console.log(result);
//             }, (errorMsg) => {
//                 console.log(errorMsg);
//             });
//     }, (errorMsg) => {
//         console.log(errorMsg);
// });

//============= Same As Above =============== 
// Removing redundant reject opertations. Using Catch Method

asyncAdd(5, 7)
    .then((result) => {
        console.log(result);
        return asyncAdd(result,33) // Chaining of Promises
            .then((result) => {
                console.log(result);
            });
    }).catch((errorMsg) =>{
        console.log(errorMsg);
});


// var somePromise = new  Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('Hey. It worked'); 
//         reject('Unable to fulfil promise'); // returns as an error 
//     }, 2500);

// });

// somePromise.then((msg) => { // resolve
//     // Works if promise is fullfilled
//     console.log('Success: ', msg);
// }, (errorMsg) => { // reject
//     console.log('Error: ', errorMsg);
// })