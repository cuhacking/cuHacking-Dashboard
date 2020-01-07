var express = require('express');
var request = require('request');
var moment = require('moment');

const app = express();

app.set("view engine", "ejs");
app.use('/static', express.static('public'));

var baseUrl = "https://cuhacking.com/api-dev";

app.get("/", (req, res) => {
    // res.render('countdown.ejs');
    res.redirect("/updates");
})

// app.get('/:a', (req, res) => {
//     res.redirect('/');
// })

app.get('/profile', (req, res) => {
    res.render('profile.ejs');
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
                if (new Date(updates.updates[id].deliveryTime).getTime() < new Date().getTime()) {
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
            for (var id in schedule.schedule) {
                // Format start and end time of the event
                schedule.schedule[id].startTime = moment(schedule.schedule[id].startTime).format("hh:mm A");
                schedule.schedule[id].endTime = moment(schedule.schedule[id].endTime).format("hh:mm A");

                arr.push(schedule.schedule[id]);
            }
            res.render("schedule.ejs", { schedule: arr });
        }
    });
})

app.get('/info', (req, res) => {
    request(baseUrl + "/info", function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            var info = JSON.parse(body);
            
            res.render("info.ejs", { info: info.info });
        }
    });
})

app.get('/map', (req, res) => {
    res.render('map.ejs');
})

app.get("/error", (req, res) => {
    res.render("error.ejs");
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
    console.log("Application started on port : " + PORT);
});