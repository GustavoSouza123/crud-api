const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/database');
const Product = require('./models/product.model');

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'server running!' });
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, 'localhost', () => {
    console.log(`Server running on http://localhost:${port}`);
});