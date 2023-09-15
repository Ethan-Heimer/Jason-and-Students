const express = require('express');
const app = express();


app.use(express.json())


//app.use(express.static(__dirname + "/public"))
app.use(express.static("./public/images"));
app.use(express.static("./public/css"));
app.use(express.static("./public/js"));

app.set("view engine", "ejs");
app.set("views", "./views");

const students = require("./data/students.json");
// import students from "data/students.json";


app.get("/", (req, res) => {
    res.render("index", {students});
})


app.get("/student/:id", (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.render("student", student);
   
})


app.all("*", (req, res) => {
    res.status(404).send("404 Not Found")
})


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
