// This is the client-side javascript.

console.log("Client-side js file is loaded.");

// The goal in this file is to fetch the forecast information.

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const forecastMessage = document.querySelector("#forecastMessage");
const errorMessage = document.querySelector("#errorMessage");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  forecastMessage.textContent = "";
  errorMessage.textContent = "Loading";
  fetch(`/weather?address=${location}`).then(resp => {
    resp.json().then(resp => {
      if (resp.error) {
        errorMessage.textContent = resp.error;
      } else {
        errorMessage.textContent = "";
        forecastMessage.textContent = `The forecast for ${resp.location} is: 
        ${resp.forecast}`;
      }
    });
  });
});
