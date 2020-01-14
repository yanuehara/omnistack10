const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.listen(3333);