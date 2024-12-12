const express = require("express");
const port = 1008;

const app = express();

app.set("view engine","ejs");

let students = [
    {id: 1, name: "Jeet", subject: "Node Js" },
    {id: 2, name: "Arjun", subject: "React Js" },
    {id: 3, name: "Nevil", subject: "Java" },
];

app.get("/", (req, res) => {
    res.render("index" , {students});
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
    
})