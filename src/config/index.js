'use strict';
const path = require('path');

const defaults = {
    root: path.join(__dirname, '..'),
    mongoOptions: { keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true },
    // notifier: notifier
};

let envName = process.env.NODE_ENV || 'development';

let envVars = require(defaults.root + '/env/' + envName);

module.exports = Object.assign({}, envVars, defaults);