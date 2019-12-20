var express = require('express');
var request = require('request');
var moment = require('moment');

const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('public'));

var baseUrl = "https://cuhacking.com/api";

app.get("/", (req, res) => {
    res.redirect("/updates");
})

app.get("/updates", (req, res) => {
    // fetch announcements from api
    request(baseUrl + "/updates", function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            var updates = JSON.parse(body);

            // Make an array of all announcements
            var arr = [];
            for (var id in updates.updates) {
                // Don't show future announcements
                if (updates.updates[id].deliveryTime < new Date().getTime()) {
                    // Make a nice string (e.g. '2 hours ago') of the delivery time
                    updates.updates[id].deliveryTime = moment(updates.updates[id].deliveryTime).fromNow();
                    arr.push(updates.updates[id]);
                }
            }
            res.render("updates.ejs", { updates: arr });
        }
    });
})

app.get("/schedule", (req, res) => {
    request(baseUrl + "/schedule", function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            var schedule = JSON.parse(body);
            // Make an array of all schedule
            var arr = [];
            for (var id in schedule.events) {
                // Format start and end time of the event
                schedule.events[id].startTime = moment(schedule.events[id].startTime).utc().format("hh:mm A");
                schedule.events[id].endTime = moment(schedule.events[id].endTime).utc().format("hh:mm A");

                arr.push(schedule.events[id]);
            }
            res.render("schedule.ejs", { schedule: arr });
        }
    });
})

app.get('/info', (req, res) => {
    res.render('info.ejs');
})

app.get("/error", (req, res) => {
    res.render("error.ejs");
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
    console.log("Application started on port : " + PORT);
});