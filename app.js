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
                    arr.push(updates.updates[id]);
                }
            }
            const sortedArray = arr.sort((a, b) => {
                if (moment(a.deliveryTime).valueOf() < moment(b.deliveryTime).valueOf()) return -1;
                if (moment(a.deliveryTime).valueOf() > moment(b.deliveryTime).valueOf()) return 1;
                return 0;
            });
            sortedArray.forEach(x => {
                // Make a nice string (e.g. '2 hours ago') of the delivery time
                x.deliveryTime = moment(x.deliveryTime).fromNow();
            })
            res.render("updates.ejs", { updates: sortedArray });
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
                if(schedule.schedule[id].type != "Volunteer"){
                    arr.push(schedule.schedule[id]);
                }
            }
            const sortedArray = arr.sort((a, b) => {
                if (moment(a.startTime).valueOf() < moment(b.startTime).valueOf()) return -1;
                if (moment(a.startTime).valueOf() > moment(b.startTime).valueOf()) return 1;
                return 0;
            })
            var arr = [];
            var arr11 = [];
            var arr12 = [];
            sortedArray.forEach(x => {
                if (moment(x.startTime).format('YYYYMMDD') == '20200111') {
                    // Format start and end time of the event
                    x.startTime = moment(x.startTime).format("hh:mm A");
                    x.endTime = moment(x.endTime).format("hh:mm A");
                    arr11.push(x);
                }
                else if (moment(x.startTime).format('YYYYMMDD') == '20200112') {
                    // Format start and end time of the event

                    x.startTime = moment(x.startTime).format("hh:mm A");
                    x.endTime = moment(x.endTime).format("hh:mm A");
                    arr12.push(x);
                }
                else{
                x.startTime = moment(x.startTime).format("hh:mm A");
                    x.endTime = moment(x.endTime).format("hh:mm A");
                    arr.push(x);
                }
            })
            res.render("schedule.ejs", { arr: arr, arr11: arr11, arr12: arr12 });
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