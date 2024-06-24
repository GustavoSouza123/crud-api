const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).send('server running!');
});

app.listen(port, 'localhost', () => {
    console.log(`server running on http://localhost:${port}`)
});