const request = require("request-promise");

const getGeekJoke = async () => {
  const response = await request(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  const theJoke = JSON.parse(response);
  return theJoke.joke;
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
