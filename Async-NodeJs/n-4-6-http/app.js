const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=zvFFYfLHhTd3sUKsFooawWDOUOkhNFuB&location=1301%20lombard%20street%20philadelphia',
    json: true // accept: 'application/json' - adds as header
    }, (error, response, body)=> {
        console.log(`Address: ${body.results[0].providedLocation.location}`)
        console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`)
        console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`)
});