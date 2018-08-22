// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true // Always parse as string
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// console.log(argv);

// geocode.geocodeAddress(argv.address, (errorMsg, results)=> {
//     if(errorMsg) {
//         console.log(errorMsg);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });


const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/493cf1fba51cbf44ce82004ca9ee26dc/37.8267,-122.4233',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(`Temperature: ${body.currently.temperature}`);
    } else
        console.log('Unable to fetch weather')
});