#!/usr/local/bin/node

let request = require('request');

let apiKey = '49f7841c12274550a57cc63dd69172c1';
let city = 'Huntsville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('err:', error);
  } else {
    let weather = JSON.parse(body)
    //let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    let message = weather.weather[0].id;
    console.log(getEmoji(Math.ceil(message/100)*100));  // Round to weather ID group
  }
});

function getEmoji(conditions) {
  switch (conditions) {
    case 200:
    // Thunderstorm
    return ":zap:";
    break;

    case 300:
    // Drizzle
    return "Drizzle";
    break;

    case 500:
    // Rain
    return ":cloud:";
    break;

    case 600:
    // Snow
    return ":snowflake:";
    break;

    case 800:
    // Clear
    return ":sunny:";
    break;

    case 900:
    // Extreme
    return ":tornado:";
    break;
  }
}