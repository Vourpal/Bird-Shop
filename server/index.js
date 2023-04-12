const express = require("express");
const app = express();
const {Item} = require("./db/schema")
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/webShop");
  console.log("mongoose connection open!");
}

app.get("/food", async (req, res) => {
  const food = await Item.find({category: "food"})
  console.log(food)
  res.send("ok it worked maybe xD?")
})

app.listen(3000, () => {
  console.log("Server side port is on!");
});
