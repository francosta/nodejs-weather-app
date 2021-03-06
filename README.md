# Weather App

## Overview

This is a simple weather app.
A user can search for any location in the world and get a detailed, updated weather forecast for that location.

## Production Stage

This app is still under production.
Basic functionality is done. About and Help pages still under construction.

## Technologies

The backend was built using Node.js and Express.
The client-side used HTML, CSS and the Handlebars npm package.

## APIs

The app uses the [Mapbox API](https://docs.mapbox.com/api/) in order to geocode locations searched by the user.
Weather forecasts are provided by the [Darksky API](https://darksky.net/dev)

## Motivation

This app was built in the context of a Node.js course on Udemy: [The Complete Node.js Course](https://www.udemy.com/the-complete-nodejs-developer-course-2/)

## Usage

**For running the app in your local server**:
Clone the repository and open it in any text editor.
Go into the web-server directory and run `node src/app`.
Open localhost:3000 in your browser.

**For accessing the app in the deployment server**:
The app is accessible at https://fcosta-weather-app-nodejs.herokuapp.com
