const express = require("express");
const app = express();
const cors = require("cors")

const routes = require("./routes/travelRoutes")

app.use(cors())
app.use(express.json())
app.use("/", routes) //para travels e passengers




module.exports = app;