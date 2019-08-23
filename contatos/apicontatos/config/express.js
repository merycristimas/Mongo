var load = require('express-load');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');

module.exports = function() {
    var app = express();
    app.set('port', 3000);
    app.use(bodyParser.urlencoded({
       extended: true
    }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    // enable cors
    app.use(cors({
        'allowedHeaders': ['sessionId', 'Content-Type'],
        'exposedHeaders': ['sessionId'],
        'origin': '*',
        'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'preflightContinue': false
    }));

    load('models',{
        cwd: 'app'
    }).then('controllers').then('routes').into(app);
    return app;
};