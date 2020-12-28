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
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/registro", (req, res) => {
  res.sendFile(__dirname + "/views/Register.html");
});

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/views/Contact.html");
});

app.get("/changelog", (req, res) => {
  res.sendFile(__dirname + "/Change.log");
});

app.get("/recovery", (req, res) => {
  res.sendFile(__dirname + "/views/Recovery.html")
})

app.get("/modelo", (req, res) => {
  res.sendFile(__dirname + "/views/Modelo.html")
})

app.get("/programas", (req, res) => {
  res.sendFile(__dirname + "/views/Programa.html")
})

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/test/Test.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

//Listen on...
app.listen(port, () => console.info(`Listening on port ${port}`));
