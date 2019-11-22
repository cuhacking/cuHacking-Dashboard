var express = require('express');

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(process.env.PORT, (req, res) => {
    console.log("Server started !!!!");
});