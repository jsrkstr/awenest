var express = require('express');
var app = module.exports = express.createServer();
app.mongoose = require('mongoose');

var config = require('./config.js')(app, express);

var models = {};
models.examples = require('./models/example')(app.mongoose);
models.users = require('./models/user')(app.mongoose);
models.reports = require('./models/report')(app.mongoose);
models.comments = require('./models/comment')(app.mongoose);
models.votes = require('./models/vote')(app.mongoose);


require('./routes')(app, models, app.mongoose);

var port = process.env.PORT || 3000;
app.listen(port);