const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const convert = require("xml-js");

const getDealsPipedrive = require("./functions/getDealsPipedrive.js");
const blingOrder = require("./transformations/newOrder");
const createOrderBling = require("./functions/postOrderBling");
const mongoose = require("./database/mongoose");
const Deals = require("./database/deals.model");

const UPLOAD_LIMIT = 5;
const app = express();

var result;

mongoose.connect();

app.use(bodyParser.json({ limit: `${UPLOAD_LIMIT}mb` }));
app.use(bodyParser.urlencoded({ extended: true, limit: `${UPLOAD_LIMIT}mb` }));
app.use(cors());

app.listen((port = 3000), () => {
  console.info(`http://localhost:${port}`);
});

app.get("/", (req, res, next) => {
  var date = new Date().toUTCString();

  var message = `
    <h1>Hello LinkApi</h1>
    <p>Status: Online</p>
    <h4>${date}</h4>`;

  return res.send(message);
});

app.get("/pipe", async (req, res, next) => {
  try {
    let deals = await getDealsPipedrive();

    for (let deal of deals.data) {
      let treatedDeal = blingOrder(deal);

      result = JSON.parse(
        convert.xml2json(treatedDeal, { compact: true, spaces: 4 })
      );

      var dealsModel = new Deals(result);

      dealsModel.save();

      let createOrderBling2 = await createOrderBling(treatedDeal);
      res.send(JSON.stringify(createOrderBling2, null, 4));
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("/result", async (req, res, next) => {
  Deals.find({}, function(err, docs) {
    if (!err) {
      res.send(docs);
      process.exit();
    } else {
      throw err;
    }
  });
});
