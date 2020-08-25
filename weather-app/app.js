const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=1b3b1f0fba26d786af7452c839f95291&query=37.8267,-122.4233';

// const toronto = 'http://api.weatherstack.com/current?access_key=1b3b1f0fba26d786af7452c839f95291&query=43.652,-79.3832&units=f';

// const mapboxLA = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RldmVuazA2MTUiLCJhIjoiY2tkOGZ1Z3ppMDdnNDJxcGtva3g4ZzYzYSJ9.OMoVXEOA5hzKXXOpzoke6w&limit=1';


geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (!process.argv[2]) {
        return console.log('No location given!')
    }
    if (error) {
        return console.log('Error', error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error);
        }
        console.log(location)
        console.log(forecastData)
    })

})

