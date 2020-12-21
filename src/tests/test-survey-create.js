'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../../server').app;
const { cleanup_db } = require('./helper');

const survey = require('../models/survey.js');

test('Clean up', cleanup_db);

test('POST /survey/create', t => {
    let payload = {
        "name": "Saifullah Khan",
        "position": "Team Lead",
        "feedback": "Satisfied"
    };
    request(app)
        .post('/survey/create')
        .send(payload)
        .expect(200)
        .end(function(err, res) {
            t.equal(res.body.name, payload.name, "name exist");
            t.equal(res.body.position, payload.position, "position exist");
            t.end();
        });
});


test('Clean up', cleanup_db);
test.onFinish(() => process.exit(0));