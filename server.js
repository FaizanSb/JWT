const express = require('express');
//const mongoose = require('mongoose');

const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//console.log(`server is running on port http://localhost:${port}`);
