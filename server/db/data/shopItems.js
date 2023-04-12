const mongoose = require("mongoose");
const { Item } = require("../schema");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/webShop");
  console.log("mongoose connection open!");
}

const shoppingList = [
  {
    name: "Beginner Cage",
    price: 21.99,
    category: "cage",
    image:
      "https://pyxis.nymag.com/v1/imgs/382/d9c/da6ae3604587672268015fe80ee1e16887-prevue-hendryx-travel-bird-cage-.2x.rhorizontal.w600.jpg",
  },
  {
    name: "Jungle Cage",
    price: 49.99,
    category: "cage",
    image:
      "https://www.customcages.com/wp-content/uploads/2016/06/products-186.jpg",
  },
  {
    name: "Gold Cage",
    price: 30.0,
    category: "cage",
    image:
      "https://media.istockphoto.com/id/483483873/photo/golden-birds-cage.jpg?s=612x612&w=0&k=20&c=fXL7oWyvrausvIpfXJWW6ZjoXb7lyflDsBU-jVisGcs=",
  },
  {
    name: "Dodecahedron Cage",
    price: 12.99,
    category: "cage",
    image:
      "https://www.tillysnest.com/wp-content/uploads/Caughey_Melissa_Original-Omlet-Geo-Bird-Cage-7.jpg",
  },
  {
    name: "White Cockatoo",
    price: 799.99,
    category: "bird",
    image:
      "https://xoticparrots.com/wp-content/uploads/2021/12/exotic_parrots__farm-20211216-0001.jpg",
  },
  {
    name: "Black Headed Caique",
    price: 599.99,
    category: "bird",
    image:
      "https://everythingbirdsonline.com/wp-content/uploads/2022/05/Black-Headed-Caique-360x480.jpg",
  },
  {
    name: "Dracula Parrot",
    price: 1299.99,
    category: "bird",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLSx5jUJGCF66RSaKYPeQH_fHoTwO0yJVOJFFrNNKN5ootPo8Ov-rQWfZcQvxUCwLZv4&usqp=CAU",
  },
  {
    name: "African Grey Parrot",
    price: 999.99,
    category: "bird",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/A9B1/production/_123114434_parrot1.png",
  },
  {
    name: "Natural Spray Pellet",
    price: 8.99,
    category: "food",
    image:
      "https://image.chewy.com/is/image/catalog/254566_MAIN._AC_SL600_V1604346115_.jpg",
  },
  {
    name: "Parakeet forti-diet",
    price: 12.99,
    category: "food",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81vA4GFIaeL.jpg",
  },
  {
    name: "Large Bird Diet",
    price: 24.99,
    category: "food",
    image:
      "https://cdn.shopify.com/s/files/1/0556/8725/0116/products/Large-Bird-3lb-727613010928-center-1_dae00aef-7dd1-4f09-b956-95e7a11c45ad.jpg?v=1642531057",
  },
  {
    name: "Random Seeds",
    price: 10.99,
    category: "food",
    image:
      "https://media.istockphoto.com/id/584599164/photo/bird-seed-for-parrots.jpg?s=612x612&w=0&k=20&c=VQR4tAlf9Crr78lNE2TmTIT8J4S9VQeavqATorjhJfY=",
  },
];

Item.insertMany(shoppingList)
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console.log(e)
})
