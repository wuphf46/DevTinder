const express = require('express');

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Yash", lastName: "Shetty"})
})

app.post("/user", (req, res) => {
    res.send("Data successfully saved to the database");
})

app.delete("/user", (req, res) => {
    res.send("User deleted successfully");
})

app.use("/test", (req,res) => {
    res.send("Hello from the server!");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...");
});