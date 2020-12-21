'use strict';

// (async () => {
//   await createTables();
//   await insertIntoTables();
// })();

const { models, sequelize } = require('../models/db');

exports.getAll = async function(req, res, next) {
    try {
        var data = await models.contactus.getAll(req);
        res.json(data);
    } catch (err) {
        res.json({ 'error': err.message, 'error': err.stack });
    }
};

exports.create = async function(req, res, next) {
    try {
        var data = await models.contactus.createNew(req.body);
        res.json(data);
    } catch (err) {
        res.json({ 'error': err.message, 'error': err.stack });
    }
};