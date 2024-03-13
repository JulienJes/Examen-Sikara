const Category = require('../models/category.model');

function getAll(req, res) {
    Category.find()
    .then((object) => {
        return res.send(object)
    })
    .catch((error) => {
        console.log("Error : ", error);
        return res.sendStatus(500);
    })
}

function getOne(req, res) {
    Category.findById(req.params.id)
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
    const {name} = body;
    if (!name) {
        return res.sendStatus(400);
    }

    const category = new Category(body);
    category.save()
    .then((object) => {
        return res.send(object);
    })
    .catch((error) => {
        console.log("Error : ", error);
        return res.sendStatus(500);
    })
}

function updateOne(req, res) {
    Category.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true})
    .then((object) => {
        return res.send(object);
    })
    .catch((error) => {
        console.log('Error :', error);
        return res.sendStatus(500);
    });
}

function deleteOne(req, res) {
    Category.deleteOne({_id: req.params.id})
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