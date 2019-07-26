const request = require("request");

// Get coordinates from location search

// This function takes an address and a callback function as arguments.
// The address will complete the url variable.
// We are going to make use of request in order to get the 

const getGeocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZnJhbmNpc2NvZmNvc3RhIiwiYSI6ImNqeTdlc2Y0djAwNnUzYm8xcTBtdGlqbDYifQ.QEEaKIFwqb1byFk_XkNazg";

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to location services.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = getGeocode;
