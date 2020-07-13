const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  type = req.params.type;
  if (type === "dad") {
    const dadJoke = await getDadJoke();
    res.status(200).json({ status: 200, joke: dadJoke });
  } else if (type === "tronald") {
    const tronaldJoke = await getTronaldDumpQuote();
    res.status(200).json({ status: 200, joke: tronaldJoke });
  } else if (type === "geek") {
    const geekJoke = await getGeekJoke();
    res.status(200).json({ status: 200, joke: geekJoke });
  } else {
    res.status(400).json({ status: 400, joke: "Unrecognized Joke Type" });
  }
};

module.exports = { handleJoke };
