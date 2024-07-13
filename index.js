const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connection');
const productsRoute = require('./src/routes/product.route');
const Product = require('./src/models/product.model');

const app = express();
const port = process.env.PORT || 8000;

// connect to MongoDB database
dotenv.config();
connectToDatabase();

// middlewares
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers['content-type']}`);
    console.log(`Date: ${new Date()}`);
    next();
});

// routes
app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server running!' });
});

app.get('/views/products', async (req, res) => {
    const products = await Product.find({});
    res.render('index', { products }); // same as { products: products }
});

// run server
app.listen(port, 'localhost', () => {
    console.log(`Server running on http://localhost:${port}`);
});