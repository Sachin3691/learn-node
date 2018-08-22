var somePromise = new  Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('Hey. It worked'); // returns as true or success. but only one can return
        reject('Unable to fulfil promise'); // returns as an error 
    }, 2500);
    
});

somePromise.then((msg) => { // resolve
    // Works if promise is fullfilled
    console.log('Success: ', msg);
}, (errorMsg) => { // reject
    console.log('Error: ', errorMsg);
})