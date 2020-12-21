'use strict';

const mongoose = require('mongoose');
const Validator = require("fastest-validator");
const v = new Validator();

var SurveySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    position: {
        type: String,
        required: [true, 'Position is required field!']
    },
    feedback: {
        type: String,
        required: [true, 'Feedback is required field!']
    },
});

let Survey = mongoose.model('surveys', SurveySchema);

exports.mongooseModel = Survey;

exports.getAll = function(req, result) {
    const resultsPerPage = 5;
    const page = parseInt(req.query.page > 0 ? req.query.page : 1);
    const sortBy = req.query.sortBy || '_id';
    const sortOrder = req.query.sortOrder == 'asc' ? 1 : -1;
    let sort = {};
    sort[sortBy] = sortOrder;
    try {
        var query = Survey
            .find()
            .sort(sort)
            .limit(resultsPerPage)
            .skip(resultsPerPage * (page - 1));

        var meta = { 'page': page, 'perPage': resultsPerPage, 'sortBy': sortBy, 'sortOrder': sortOrder };
        query.exec(function(err, surveys) {
            if (err) return result(err, null);
            result(null, { 'meta': meta, 'surveys': surveys });
        })
    } catch (err) {
        result(err, null);
    }
};

exports.create = async function(body, result) {
    // frontend validations
    const rules = {
        name: { type: "string", min: 3, max: 255 },
        position: { type: "string", min: 5, max: 255 },
        feedback: { type: "string", min: 5, max: 255 },
        age: { type: "number", optional: true }
    };

    var errors = v.validate(body, rules);
    if (Array.isArray(errors)) {
        var err = new Error(errors[0]['message']);
        return result(err);
    }

    try {
        var survey = new Survey(body);
        survey.save(err => {
            if (err) return result(err);
            return result(null, survey); // survey._id: ID is created by default!
        });
    } catch (err) {
        return result(err);
    }
};