const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/siddheshdynamic", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection success........")
    }).catch((error) => {
        console.log(error);
    })

