'use strict';

const co = require('co');
const survey = require('../models/survey.js').model;

exports.cleanup_db = function(t) {
    co(function*() {
        yield survey.deleteMany();
        t.end();
    });
};