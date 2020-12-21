'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./src/config');
const instagram = require('./src/helpers/instagram');

const app = express();
app.use(cors());
app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.static(config.root + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function errorHandler(err, req, res, next) {
    console.error("Error: " + err.message);
    res.json({ error: err.message, stack: err.stack });
}

app.get('/', function(req, res) {
    instagram.getIGPosts().then(posts => {
        res.render('index', { 'items': posts })
    });
});


app.get('/some-error', function(req, res) {
    throw Error("Some Error occured!");
});

app.get('/doc', function(req, res) {
    try {
        res.render('doc', { 'items': [] });
    } catch (e) {
        res.json({ 'error': e.message });
    }
});


app.get('/doc/json', function(req, res) {
    const yaml = require('js-yaml');
    const fs = require('fs');
    try {
        const doc = yaml.safeLoad(fs.readFileSync('./doc/apidoc.yaml', 'utf8'));
        res.json(doc);
    } catch (e) {
        res.json({ 'error': e.message });
    }
});


require('./src/routes')(app);

app.use(errorHandler);

function listenApp() {
    const PORT = process.env.PORT || 3000;
    const HOST = '0.0.0.0';
    console.log([app.get('env')]);
    // if (app.get('env') === 'test') return;
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
}

function connectMongo() {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', connectMongo)
        .once('open', listenApp);
    mongoose.connect(config.mongo_db, config.mongoOptions);
}

exports.app = app;
connectMongo();