const {model} = require("mongoose");
const {watchlistSchema} = require('../schemas/WatchlistSchema.js');

const watchlistModel = model("watchlist", watchlistSchema);

module.exports = { watchlistModel };
