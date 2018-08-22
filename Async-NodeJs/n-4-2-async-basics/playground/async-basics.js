console.log('Starting app');

setTimeout(()=> {
    console.log('Inside Callback');
}, 2000 );

// Why runs late even when the delay is 0?
setTimeout(()=> {
    console.log('Inside Callback with 0 secs');
}, 0 );

console.log('Finishing up');