const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/lobby.html"));
});

app.get("/room.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/room.html"));
  });

  app.get("/AboutMe.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/AboutMe.html"));
  });
  app.get("/lobby.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/lobby.html"));
  });
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
