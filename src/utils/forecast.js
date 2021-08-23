const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=42bfc980f851a134576ac49fa03cd28e&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`

    request( {url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees.
             The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast