const express = require("express");
const app = express();
const { Item } = require("./db/schema");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors')

main().catch((err) => console.log(err));

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/webShop");
  console.log("mongoose connection open!");
}

app.get("/food", async (req, res) => {
  const food = await Item.find({ category: "food" });
  res.send(food);
});

app.get("/cage", async (req, res) => {
  const cage = await Item.find({ category: "cage" });
  console.log(cage);
  res.send(cage);
});

app.get("/bird", async (req, res) => {
  const bird = await Item.find({ category: "bird" });
  res.send(bird);
});

app.get("/category/:id", async (req, res) => {
  id = req.params["id"]
  const details = await Item.findOne({name: id})
  res.send(details)
})

app.get("/random", async (req, res) => {
  const random = await Item.aggregate([{ $sample: { size: 4 } }])
  res.send(random)
})

app.listen(3000, () => {
  console.log("Server side port is on!");
});
