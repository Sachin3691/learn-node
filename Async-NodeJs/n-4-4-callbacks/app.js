const request = require('request');

// Add Key -> from Google API keys for geocodeing and geolocating
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philedelphia&key=AIzaSyBacOOkKO2FRAsu072Z5CswJRbfAw4VDX0',
    json: true
    }, (error, response, body)=> {
        //console.log(body);  ==> This prints results as Object. Solution is to Stringify 
        console.log(JSON.stringify(body, undefined, 2 ));  // pretty priting JSON
});