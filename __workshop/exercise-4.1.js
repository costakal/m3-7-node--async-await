const request = require("request-promise");

const getDadJoke = async () => {
  const options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json;",
    },
  };
  const response = await request(options);
  const theJoke = JSON.parse(response);
  return theJoke.joke;
};

// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
