const express = require("express");
const port = 1030;
const path =require("path");

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/Public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
});