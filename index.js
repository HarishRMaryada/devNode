"use strict"
require("app-module-path").addPath(__dirname);
const express = require('express')
const app = express()
const port = 3000

require("api")
app.listen(port, () => console.log(`Example app listening on port ${port}!`))