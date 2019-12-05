var express = require('express');
var request = require('request');
var moment = require('moment');

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
            var arr = [];
            for (var id in updates.updates) {
                updates.updates[id].deliveryTime = moment(updates.updates[id].deliveryTime).fromNow();
                arr.push(updates.updates[id]);
            }
            res.render("index.ejs", { updates: arr });

        }
    });
})

app.get("/schedule", (req, res) => {
    request(baseUrl + "/schedule", function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            var schedule = JSON.parse(body);
            var arr = [];
            for (var id in schedule.events) {
                schedule.events[id].startTime = moment(schedule.events[id].startTime).utc().format("hh:mm A");
                schedule.events[id].endTime = moment(schedule.events[id].endTime).utc().format("hh:mm A");

                arr.push(schedule.events[id]);
            }
            res.render("schedule.ejs", { schedule: arr });

        }
    });
})

app.get("/error", (req, res) => {
    res.render("error.ejs");
})

app.listen(process.env.PORT, (req, res) => {
    console.log("Server started !!!!");
});