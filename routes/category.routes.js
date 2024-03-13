const express = require("express");
const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getOne);
router.post('/', categoryController.createOne);
router.put('/:id', categoryController.updateOne);
router.delete('/:id', categoryController.deleteOne);

module.exports = router;