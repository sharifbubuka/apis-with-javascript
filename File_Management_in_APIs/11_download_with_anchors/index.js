const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

const port = 3000;

app.listen(port, () =>
    console.log(`Server is running and listening on port ${port}`)
);
