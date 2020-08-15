var express = require("express");
var router = express.Router();
const request = require("request");
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 10 });

//the only GET request that the server will know to handle.
//returns video items
router.get("/videos", function (req, res, next) {
  const page = req.query.page;
  if (!page) {
    //needed param was not provided. send error to client
    res.status(400);
    return res.send({ error: "Incorrect data was provided." });
  }
  if (page > 4) {
    //page limit is to mock end of list from DB. send message to client
    res.status(204);
    return res.send({ message: "No more videos to show" });
  }

  //check if value can be taken from cache
  const dataFromCache = cache.get(`page-${page}`);
  if (dataFromCache !== undefined) {
    //data is available in cache. send it to client
    return res.json(dataFromCache);
  } else {
    //make a request and fetch resources (mocking DB query)
    const url = `https://playbuzz-cdn.s3.amazonaws.com/content/feed/resources.json`;
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        //successful request - parse, add result to cache and send data to client
        const parsedData = JSON.parse(body);
        cache.set(`page-${page}`, parsedData);
        return res.json(parsedData);
      } else {
        //failed request - send error to client
        res.status(500);
        return res.send({ error: "Unable to fetch data" });
      }
    });
  }
});

module.exports = router;
