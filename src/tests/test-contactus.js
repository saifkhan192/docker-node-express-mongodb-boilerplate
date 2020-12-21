'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../../server').app;
const { setup_postgres, cleanup_postgres } = require('./helper');

test('Setup postgres', setup_postgres);

test('POST /api/contactus', t => {
    let payload = {
        "name": "Saifullah Khan",
        "email": "saifkhan912@gmail.com",
        "message": "Hi, this is test msg"
    };
    request(app)
        .post('/api/contactus')
        .send(payload)
        .expect(200)
        .end(function(err, res) {
            if (err) {
                console.error(err);
            }
            t.equal(res.body.name, "Saifullah Khan");
            t.equal(res.body.email, "saifkhan912@gmail.com");
            t.end();
        });
});

test('GET /api/contactus (get contactus inquiries)', t => {
    request(app)
        .get('/api/contactus')
        .send()
        .expect(200)
        .end(function(err, res) {
            if (err) {
                console.error(err);
            }
            let item = res.body[0];
            t.equal(item.name, "Saifullah Khan");
            t.equal(item.email, "saifkhan912@gmail.com");
            t.end();
        });
});

test('Clean up postgres', cleanup_postgres);
test.onFinish(() => process.exit(0));