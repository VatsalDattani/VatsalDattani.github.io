const express = require("express");
const mongoose = require("mongoose");
const boyParser = require("body-parser");

//initialize express
const app = express();

//Body Parse Middleware
app.use(bodyParser.json());