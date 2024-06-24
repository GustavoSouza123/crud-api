const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = `mongodb+srv://gustavoelia7:Nj9oRYR20fXX8WuF@backenddb.0pr5xba.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`;
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.status(200).send('server running!');
});

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to database');
        app.listen(port, 'localhost', () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Connection to database failed'));