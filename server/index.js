const express = require("express");
const contactsRouter = require("./routes/contactsRouter");
const commentsRouter = require("./routes/commentsRouter");
const vehiclesRouter = require("./routes/vehiclesRouter");
const productsRouter = require("./routes/productsRouter");
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3003;

const mongoose = require("mongoose");
mongoose.promise = global.Promise;
mongoose.connect(`mongodb://kdybvig:Xpress1234@ds221242.mlab.com:21242/advanced-express-practice-kdybvig`)

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