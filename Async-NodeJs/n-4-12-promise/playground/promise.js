var somePromise = new  Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('Hey. It worked'); // returns as true or success. but only one can return
        reject('Unable to fulfil promise'); // returns as an error 
    }, 2500);
    
});

somePromise.then((msg) => { // resolve
    // Works if promise is fullfilled.
    // when a promise is fullfiled "**THEN**" do some action
    console.log('Success: ', msg);
}, (errorMsg) => { 
    // reaches here, if promise is failed.
    //when a promise is failed "**THEN**" do some action
    console.log('Error: ', errorMsg);
})