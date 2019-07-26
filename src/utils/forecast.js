const request = require("request");

const getForecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/28f3d3f9406aa6f3e17a550880f7b82b/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find the location.", undefined);
    } else {
      const { currently } = body;
      const { temperature } = currently;
      const { precipProbability } = currently;
      callback(
        undefined,
        `${
          body.daily.data[0].summary
        } It is currently ${temperature} degrees out. There is ${precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = getForecast;
