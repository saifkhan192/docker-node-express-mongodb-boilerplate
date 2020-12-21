'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../../server').app;
const { cleanup_mongo } = require('./helper');

// const survey = require('../models/surveyModel').mongooseModel;

test('Clean up', cleanup_mongo);

test('POST /api/survey (create survey)', t => {
    let payload = {
        "name": "Saifullah Khan",
        "position": "Team Lead",
        "feedback": "Satisfied"
    };
    request(app)
        .post('/api/survey')
        .send(payload)
        .expect(200)
        .end(function(err, res) {
            if (err) {
                console.error(err);
            }
            t.equal(res.body.name, payload.name, "name exist");
            t.equal(res.body.position, payload.position, "position exist");
            t.end();
        });
});

test('GET /api/survey (get survey list)', t => {
    request(app)
        .get('/api/survey')
        .send()
        .expect(200)
        .end(function(err, res) {
            if (err) {
                console.error(err);
            }
            t.assert(res.body.surveys != undefined, "'surveys' key should exist in response");
            t.end();
        });
});

test('Clean up', cleanup_mongo);
test.onFinish(() => process.exit(0));