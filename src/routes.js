'use strict';

const surveyController = require('./controllers/surveyController.js');
const contactusController = require('./controllers/contactusController.js');

module.exports = function(app) {
    app.get('/api/survey', surveyController.getAll);
    app.post('/api/survey', surveyController.create);

    app.get('/api/contactus', contactusController.getAll);
    app.post('/api/contactus', contactusController.create);
};