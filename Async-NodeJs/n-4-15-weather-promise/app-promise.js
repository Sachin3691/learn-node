const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${WEATHER_APP_KEY}&location=${encodedAddress}`;

var lat, lng;

axios.get(geoCodeURL).then((response) => {

    if (response.data.results[0].locations.length == 0) {
        throw new Error('Unable to find address.');
    } else {
        console.log('Location: ', response.data.results[0].locations[0].adminArea4);
        var lat = response.data.results[0].locations[0].latLng.lat;
        var lng = response.data.results[0].locations[0].latLng.lng;

        var weatherURL = `https://api.darksky.net/forecast/493cf1fba51cbf44ce82004ca9ee26dc/${lat},${lng}?units=si`;

        axios.get(weatherURL).then((wetherResponse) => {
            console.log(`It's currently ${wetherResponse.data.currently.temperature}. It feels like ${wetherResponse.data.currently.apparentTemperature}.`)

        }).catch((e) => {
            console.log(e);
        })
    }
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API Server');
    } else {
        console.log(e);
    }
})