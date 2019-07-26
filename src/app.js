const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Create a variable app that wraps the express functionality.
const app = express();
const port = process.env.PORT || 3000; // Set the port to the environment variable value when the app is deployed in Heroku.

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Setup routes
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Francisco Costa"
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me", name: "Francisco Costa" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Francisco Costa",
    message: "Please let me know how I can help you today."
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address"
    });
  } else {
    const address = req.query.address;

    geocode(address, (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error: error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: address
        });
      });
    });
  }
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term."
    });
  }

  console.log(req.query);
  res.send({
    products: []
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help",
    errorMessage: "Help article not found.",
    name: "Francisco Costa"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found.",
    name: "Francisco Costa"
  });
});

// Start the server on a specific port.
// Indicate the port and use an optional argument.
app.listen(port, () => {
  console.log(`The server is up on port ${port}.`);
});
