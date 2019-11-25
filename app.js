var express = require('express');
var request = require('request');

const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('public'));

var baseUrl = "https://cuhacking.com/api-dev";

app.get("/", (req, res) => {
    res.redirect("/updates");
})

app.get("/updates", (req, res) => {
    request(baseUrl + "/updates", function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            var updates = JSON.parse(body);
            res.render("index.ejs", { updates: updates });

        }
    });
})

app.get("/schedule", (req, res) => {
    res.render("schedule.ejs");
})

app.get("/error", (req, res) => {
    res.render("error.ejs");
})

app.listen(process.env.PORT, (req, res) => {
    console.log("Server started !!!!");
});