'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Validator = require("fastest-validator");
const v = new Validator();

var Schema = mongoose.Schema;
var SurveySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required field!']
    },
    position: {
        type: String,
        required: [true, 'Position is required field!']
    },
    feedback: {
        type: String,
        required: true
    },
});

let Survey = mongoose.model('surveys', SurveySchema);

exports.model = Survey;


exports.load = async function(req, res, next) {
    const resultsPerPage = 5;
    const page = parseInt(req.query.page > 0 ? req.query.page : 1);
    const sortBy = req.query.sortBy || '_id';
    const sortOrder = req.query.sortOrder == 'asc' ? 1 : -1;
    let sort = {};
    sort[sortBy] = sortOrder;
    try {
        let surveys = await Survey
            .find()
            .sort(sort)
            .limit(resultsPerPage)
            .skip(resultsPerPage * (page - 1));
        const meta = { 'page': page, 'perPage': resultsPerPage, 'sortBy': sortBy, 'sortOrder': sortOrder };
        res.json({ 'meta': meta, 'surveys': surveys });
    } catch (err) {
        res.json(err.message);
    }
};

exports.create = async function(req, res, next) {
    const rules = {
        name: { type: "string", min: 3, max: 255 },
        position: { type: "string", min: 5, max: 255 },
        feedback: { type: "string", min: 5, max: 255 },
        age: { type: "number", optional: true }
    };

    let result = v.validate(req.body, rules);
    if (Array.isArray(result) && result.length) {
        // throw Error(result[0]['message']);
        res.status(400).json({ 'error': result[0]['message'] });
    }

    try {
        let survey = new Survey(req.body);
        let surveyNew = await survey.save();
        res.json(surveyNew);
    } catch (err) {
        res.json(err.message);
    }
};