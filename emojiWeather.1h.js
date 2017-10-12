#!/usr/local/bin/node

let request = require('request');

let apiKey = '';
let city = 'Huntsville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

let emojis = [
    ':cry:',        // No connection
    '::',           // 
    ':zap:',        // Thunderstorm
    ':drizzle:',    // Rain
    '::',           // 
    ':cloud:',      // Cloudy
    ':snowflake:',  // Snow
    '::',           // 
    ':sunny:',      // Clear
    ':tornado:']    // Extreme

request(url, function (err, response, body) {   // Collect JSON object
    if (err) {  // If no connection, so sad...
        console.log(emojis[0]);
    } else {

        let weather = JSON.parse(body)
        let id = weather.weather[0].id; // Seperate the weather ID
        id = Math.ceil(id / 100);       // Get only the hundreds place (1xx, 2xx)

        console.log(emojis[id]);        // Print the emoji 
    }
});