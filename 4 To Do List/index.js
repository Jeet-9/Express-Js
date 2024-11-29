const express = require("express");
const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let tasks = [
    { id: 1, description: "Learn Node.js", status: "Pending" },
    { id: 2, description: "Complete Homework", status: "In Progress" },
    { id: 3, description: "Read a Book", status: "Completed" },
];

app.get("/", (req, res) => {
    res.render("index", { tasks });
});

app.post("/addTask", (req, res) => {
    req.body.id = tasks.length + 1;
    tasks.push(req.body);
    res.redirect("/");
});

app.get("/deleteTask", (req, res) => {
    tasks = tasks.filter((task) => task.id != req.query.id);
    res.redirect("/");
});

app.get("/editTask/:id", (req, res) => {
    let task = tasks.find((task) => task.id == req.params.id);
    res.render("edit", { task });
});

app.post("/updateTask", (req, res) => {
    tasks.forEach((task) => {
        if (task.id == req.body.id) {
            task.description = req.body.description;
            task.status = req.body.status;
        }
    });
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});
