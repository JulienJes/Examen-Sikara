const express = require('express');
const gameRoutes = require('./game.routes');
const categoryRoutes = require('./category.routes');

const routes = express.Router();
routes.use('/game', gameRoutes);
routes.use('/category', categoryRoutes);


module.exports = routes;