'use strict';

// const Validator = require("fastest-validator");
// const v = new Validator();

const { DataTypes } = require('sequelize');

const contactUs = (sequelize) => {
    const contactUs = sequelize.define('contactUs', {
        // Model attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'contactus'
    });

    contactUs.getAll = async req => {
        // await contactUs.sync({ force: true });
        return await contactUs.findAll({});
    };

    contactUs.createNew = async body => {
        // await contactUs.sync({ force: true });
        return await contactUs.create(body);
    };

    return contactUs;
};

module.exports = contactUs;