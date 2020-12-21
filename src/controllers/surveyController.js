'use strict';

let surveyModel = require("../models/surveyModel");

exports.getAll = async function(req, res, next) {
    try {
        surveyModel.getAll(req, (err, data) => {
            if (err) {
                res.json(err.message);
            } else {
                res.json(data);
            }
        });
    } catch (err) {
        res.json(err.message);
    }
};

exports.create = async function(req, res, next) {
    try {
        surveyModel.create(req.body, (err, data) => {
            if (err) {
                res.json(err.message);
            } else {
                res.json(data);
            }
        });
    } catch (err) {
        res.json(err.message);
    }
};