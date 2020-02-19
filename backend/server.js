const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbconn = require('./dbconn');

const productRoutes = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//Default route for api
app.get('/', function(req, res) {
    return res.send({ error: true, message: 'hello'})
});

//Route for product CRUD
app.use("/product", productRoutes);

//Set port for server to run on 
app.listen(5000, function () {
    console.log('Server is running on port 5000')
});

module.exports = app;