const express = require("express");
const gameController = require("../controllers/game.controller");
const router = express.Router();

router.get('/', gameController.getAll);
router.get('/:id', gameController.getOne);
router.post('/', gameController.createOne);
router.put('/:id', gameController.updateOne);
router.delete('/:id', gameController.deleteOne);

module.exports = router;