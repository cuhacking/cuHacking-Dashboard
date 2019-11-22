var express = require('express');

const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('public'));


app.get("/", (req, res) => {
    res.redirect("/updates");
})

app.get("/updates", (req, res) => {
    res.render("index.ejs");
})

app.get("/schedule", (req, res) => {
    res.render("schedule.ejs");
})

app.listen(process.env.PORT, (req, res) => {
    console.log("Server started !!!!");
});