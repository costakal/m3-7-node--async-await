const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  const options = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/json",
    },
  };
  const response = await request(options);
  const theJoke = JSON.parse(response);
  return theJoke.value;
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
