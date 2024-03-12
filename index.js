const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/game.routes');
const uri = 'mongodb+srv://jesionekwd:i4DvFjzti3EmFdE3@examen.izmlms3.mongodb.net/?retryWrites=true&w=majority&appName=Examen'
// const uri = 'mongodb://127.0.0.1:27017/jeuxvideo'; 

const app = express();

const promise = mongoose.connect(uri);
const port = 3000;

promise.then((db) => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})

app.use('/public', express.static('./client/public'));
app.use('/assets', express.static('./client/assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/api/game', gameRoutes);