'use strict';

// import Sequelize from 'sequelize';
const { Sequelize, DataTypes } = require('sequelize');

const config = require('../../src/config');


const sequelize = new Sequelize(
    config.postgres_db, {
        logging: false,
        // logging: console.log,
        // logging: (...msg) => console.log(msg), // Displays all log function call parameters
    }
);

const models = {
    contactus: require('./contactusModel')(sequelize),
};

exports.models = models;
exports.sequelize = sequelize;