const express = require("express");
const port = 1011;

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded());

let students = [
    {id: 1, name: "Jeet", subject: "Node Js" },
    {id: 2, name: "Arjun", subject: "React Js" },
    {id: 3, name: "Nevil", subject: "Java" },
];

app.get("/", (req, res) => {
    res.render("index" , {students});
});

app.post("/addData", (req, res) => {
    req.body.id = students.length + 1;
    students.push(req.body);
    res.redirect("/");
});

app.get("/deleteData", (req, res) => {
    let deleteRecord = students.filter((item) => item.id != req.query.id);
    students = deleteRecord;    
    res.redirect("/")
});

app.get("/editData/:id", (req, res) => {
    let singalData = students.find((item) => item.id == req.params.id);
    res.render("edit", { singalData })
})

app.post("/updataData", (req, res) => {
    students.forEach((student) => {
        if (student.id == req.body.id) {
            (student.id = req.body.id),
                (student.name = req.body.name),
                (student.subject = req.body.subject);
        } else {
            student;
        }
    });
    res.redirect("/");
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
});