const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connection');
const Product = require('./src/models/product.model');
const productsRoute = require('./src/routes/product.route');

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
connectToDatabase();

// middleware
app.use(express.json());

// routes
app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server running!' });
});

// run server
app.listen(port, 'localhost', () => {
    console.log(`Server running on http://localhost:${port}`);
});