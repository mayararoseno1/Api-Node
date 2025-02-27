const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const productsRoutes = require('./routes/productsRoutes');
app.use('/api/products', productsRoutes);

app.listen(port, ()=> {
console.log(`Server running in https://localhost:${port}`);
});
