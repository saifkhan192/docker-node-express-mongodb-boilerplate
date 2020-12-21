'use strict';

const co = require('co');
const survey = require('../models/surveyModel').mongooseModel;
const { sequelize } = require('../models/db');

exports.cleanup_mongo = function(t) {
    co(function*() {
        yield survey.deleteMany({});
        t.end();
    });
};

exports.setup_postgres = function(t) {
    co(function*() {
        // create tables
        yield sequelize.sync({ force: true });
        t.end();
    });
};

exports.cleanup_postgres = function(t) {
    co(function*() {
        // drop all tables
        yield sequelize.drop();
        t.end();
    });
};