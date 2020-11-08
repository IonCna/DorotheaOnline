// Imports
const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use("/js", express.static(`${__dirname}/public/js`));
app.use("/img", express.static(`${__dirname}/public/img`));

app.use(express.static("src"));
app.use("/src", express.static(`${__dirname}/src/`));

// DEV ONLY
app.use("/test", express.static(`${__dirname}/test/`));

// Set Views
app.set("views", "./views");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/Register.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/About.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/Contact.html");
});

app.get("/changelog", (req, res) => {
  res.sendFile(__dirname + "/Change.log");
});

app.get("/recovery", (req, res) => {
  res.sendFile(__dirname + "/views/Recovery.html")
})

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/test/Test.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

//Listen on...
app.listen(port, () => console.info(`Listening on port ${port}`));
