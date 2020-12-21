'use strict';

const {sequelize} = require('./models/db'),
    dontRunServer = true;
const {app} = require('../server');

/*
 * Sequelize.sync({ force: true });
 * todo
 */