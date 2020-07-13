// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = JSON.parse(response);
    const latitude = issLocation.iss_position.latitude;
    const longitude = issLocation.iss_position.longitude;
    const coordinates = { latitude, longitude };
    console.log(coordinates);
  } catch (err) {
    console.log("Error: ", err);
  }
};

getIssPosition();
