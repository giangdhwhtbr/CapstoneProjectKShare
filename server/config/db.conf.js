"use strict";

const mongoose = require('mongoose');
const dbConst = require('../constants/db.json');

module.exports = class DBConfig {
    static init() {
      // const URL = (process.env.NODE_ENV === 'production') ? dbConst.localhost
                                                          // : dbConst.mongolab;
      const URL = dbConst.localhost;
      mongoose.connect(URL);
      mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    }
};
