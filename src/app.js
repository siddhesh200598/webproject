const express = require("express");
require("./db/conn");
const User = require('./models/username');
const hbs = require("hbs");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000


const staticpath = path.join(__dirname, "../public");
const partialspath = path.join(__dirname, "../templates/partials");
const viewspath = path.join(__dirname, "../templates/views");

app.use(express.static(staticpath));
app.set('view engine', 'hbs');
app.set("views", viewspath);
hbs.registerPartials(partialspath);

app.use(express.urlencoded({ extended: false }))
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/contact', async (req, res) => {
    try {
        const userdata = new User(req.body);
        await userdata.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
});