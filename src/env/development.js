'use strict';

module.exports = {
    mongo_db: process.env.MONGODB_URL || 'mongodb://mongodb:27017/demo_db_dev',
    postgres_db: process.env.POSTGRES_URL || 'postgres://user:pass@postgresdb:5432/demo-db',
};