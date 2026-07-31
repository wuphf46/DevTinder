const express = require('express');

const app = express();

app.use("/", (req,res) => {
    res.send("Namaste from dashboard!");
});

app.use("/hello", (req,res) => {
    res.send("Hello hello hello!");
});

app.use("/test", (req,res) => {
    res.send("hello from the server");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...");
});