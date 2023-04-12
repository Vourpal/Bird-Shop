const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["cage", "bird", "food"]
    },
    image: {
        type: String,
        required: true
    }
})

const Item = mongoose.model("Item", storeSchema)

module.exports = {
    Item,
} 