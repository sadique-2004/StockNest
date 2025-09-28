
const { Schema } = require('mongoose');


const watchlistSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

module.exports = {watchlistSchema};