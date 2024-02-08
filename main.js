const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

//-----Routes-----//
const circle = require('./routes/circle');
const rectangle = require('./routes/rectangle');
const triangle = require('./routes/triangle');

app.use('/circle', circle);
app.use('/rectangle', rectangle);
app.use('/triangle', triangle);

app.get('/', (req, res) => {
    res.send('Welcome to the Architectures Playground API for the Client Server Architecture, please use the /circle, /rectangle, or /triangle endpoints to calculate the area and perimeter of the respective shapes.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});