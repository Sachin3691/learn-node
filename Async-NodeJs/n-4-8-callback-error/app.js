const request = require('request');
const yargs = require('yargs');

const WEATHER_APP_KEY = 'zvFFYfLHhTd3sUKsFooawWDOUOkhNFuB';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true // Always parse as string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${WEATHER_APP_KEY}&location=${encodedAddress}`,
    json: true 
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Geo Services');
    } else if (body.results[0].locations.length == 0) {
        console.log('Unable to find address.')
    } else {
       // console.log(JSON.stringify(response, undefined, 2));
        console.log(`Address: ${body.results[0].locations[0].adminArea4}`);
        console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
        console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
    }
});