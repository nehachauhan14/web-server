const request = require('request'); 

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/0ffdd3eef5135209a7391c56d6d9551e/${lat},${long}?units=si`;

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to server at the moment!');
        } else if(body.error) {
            callback('Unable to find location!');
        } else {
            callback(undefined, {
                summary : body.currently.summary,
                apparentTemperature: body.currently.apparentTemperature,
                cloudCover: body.currently.cloudCover
            })
        }
    })
}

module.exports = {
    forecast
}