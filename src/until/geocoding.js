const request = require('request');

const geoTude = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +
    '.json?access_token=pk.eyJ1IjoibG9pYmluaGRvbmciLCJhIjoiY2p5MmNib29yMGc1ZjNubGdsOWJlaTA0YyJ9.mSij7XPiqsP2LfeA4fkCwA&limit=1';
    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Cannot connect to server',undefined);
        }
        else if(body.features.length === 0) {
            callback('You enter the wrong location',undefined)
        }
        else {
            callback(undefined,{
                lattitude:body.features[0].center[1],
                longtitude :body.features[0].center[0],
                placename :body.features[0].place_name
            })
        }
    });
};
 const geoWeather = (lattitude, longtitude, placename, callback) => {
    const url = 'https://api.darksky.net/forecast/a555c33392bf4e5d408760e2a9687b70/'+
    lattitude + ',' + longtitude + '?';
    
    request ({url, json: true}, (error, {body}) => {
         if (error) {
            callback('Cannot connect to server', undefined);
         }
         else if (body.error) {
            callback('You provide the wrong location', undefined);
         }
         else {
            callback(undefined, {
                 placename: placename,
                 rain: body.currently.precipProbability,
                 degree: body.currently.temperature,
                 cloud: body.currently.cloudCover,
                 message: body.daily.data[0].summary
             })
         }
    });
 };

module.exports = {
    geoTude,
    geoWeather
}