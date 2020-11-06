// Imports
const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use("/js", express.static(`${__dirname}/public/js`));

app.use(express.static("src"))
app.use("/src", express.static(`${__dirname}/src/`))

// Set Views
app.set("views", "./views");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html")
})

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "views/Register.html")
})

//Listen on...
app.listen(port, () => console.info(`Listening on port ${port}`));
