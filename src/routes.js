'use strict';

const survey = require('./models/survey.js');

module.exports = function(app) {
    app.get('/api/survey', survey.load);
    app.post('/api/survey', survey.create);
};