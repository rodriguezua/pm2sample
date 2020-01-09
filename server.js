const express = require('express');
const app = express();
var port = process.env.PORT;
app.get('/', function (req, res) { res.send("NodeJS Process environment: " + process.env.NODE_ENV + " and PORT: " + process.env.PORT)});
app.listen(port, () => console.log('Example app listening on port:' + port));
