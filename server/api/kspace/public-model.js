/**
 * Created by GiangDH on 8/25/16.
 */


"use strict";

const mongoose = require('mongoose');

const PublicKspaceSchema = new mongoose.Schema({
  users: [{
    type: String
  }]
});

module.exports = PublicKspaceSchema;
