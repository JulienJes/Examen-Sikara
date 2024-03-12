const Game = require('../models/game.model');

function getAll(req, res) {
    Game.find()
    .then((object) => {
        return res.send(object)
    })
    .catch((error) => {
        console.log("Error : ", error);
        return res.sendStatus(500);
    })
}

function getOne(req, res) {
    Game.findById(req.params.id)
    .then((object) => {
        return res.send(object);
    })
    .catch((error) => {
        console.log("Error : ", error);
        return res.sendStatus(500);
    })
}

function createOne(req, res) {
    const body = req.body;
    const {name, platforms, genres, year, developer, publisher} = body;
    if (!name || !platforms || !genres || !year || !developer || !publisher) {
        return res.sendStatus(400);
    }

    const game = new Game(body);
    game.save()
    .then((object) => {
        return res.send(object);
    })
    .catch((error) => {
        console.log("Error : ", error);
        return res.sendStatus(500);
    })
}

function updateOne(req, res) {
    Game.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true})
    .then((object) => {
        return res.send(object);
    })
    .catch((error) => {
        console.log('Error :', error);
        return res.sendStatus(500);
    });
}

function deleteOne(req, res) {
    Game.deleteOne({_id: req.params.id})
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log("Error : ", error);
        return res.sendStatus(500);
    })
}

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
};