const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMsg, results)=> {
    if(errorMsg) {
        console.log(errorMsg);
    } else {
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        weather.getWeather(results.latitide, results.longitude, (errorMsg, weatherResults) => {
            if (errorMsg) {
                console.log(errorMsg);
            } else {
               console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
            }
        });
    }
});

