const {mongoose, Schema} = require('mongoose');

const gameSchema = mongoose.Schema({
    name: {type: String, required:true},
    platforms: {type: [String], required:true},
    categories: {type: [Schema.Types.ObjectId], required:true},
    themes: {type: [String]},
    year: {type: Number, min: 1900, max: new Date().getFullYear(), required: true},
    modes: {type: [String]},
    developer: {type: String, required: true},
    publisher: {type: String, required: true}
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;