const express = require("express");
const vehicles = require("./vehicles");
const contactsRouter = require("./contactsRouter");
const commentsRouter = require("./commentsRouter");
const vehiclesRouter = require("./vehiclesRouter");
const productsRouter = require("./productsRouter");
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/comments', commentsRouter);
app.use('/contacts', contactsRouter);
app.use('/vehicles', vehiclesRouter);
app.use('/products', productsRouter);
app.use(bodyParser.json());

app.listen(PORT, (err) => {
    if(err) {
        return err
    } else {
        console.log(`Server is listening on ${PORT}`);
    }
} )
