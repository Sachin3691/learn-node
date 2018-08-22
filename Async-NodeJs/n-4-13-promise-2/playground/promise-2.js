const request = require('request');

const WEATHER_APP_KEY = 'zvFFYfLHhTd3sUKsFooawWDOUOkhNFuB';

var geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {  
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${WEATHER_APP_KEY}&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            reject('Unable to connect to Geo Services');
        } else if (body.results[0].locations.length == 0) {
            reject('Unable to find address.');
        } else {
            resolve({
                address: body.results[0].locations[0].adminArea4, 
                latitide:body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            })
        }
    });
});
}

geoCodeAddress('')
    .then((location)=>{
        console.log(JSON.stringify(location, undefined, 2));
    }, (errorMsg) => {
        console.log(errorMsg);
    });