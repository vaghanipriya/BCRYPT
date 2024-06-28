const express = require("express");

const connectdb = require("./db/dbconnection");
const router = require("./routes/V1");

const app = express();

app.listen(9000, () => {
    console.log("hello....!!");
});

app.use(express.json());
app.use("/V1", router);

connectdb();
