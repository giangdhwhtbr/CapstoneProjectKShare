"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const reportSchema = require('./report-model');
const _ = require('lodash');

reportSchema.statics.getAll = (status) => {
  return new Promise((resolve, reject) => {

    Report
      .find({
        'status': status
      })
      .exec((err, reports) => {
        err ? reject(err)
          : resolve(reports);
      });
  });
}

reportSchema.statics.getReportById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('ID is not a String.'));
    }
    Report
      .findById(id)
      .exec((err, report) => {
        err ? reject(err)
          : resolve(report);
      });
  });
}

reportSchema.statics.createReport = (report) => {
  return new Promise((resolve, reject) => {

    let _report = new Report(report);
    _report.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

reportSchema.statics.updateReportById = (info) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(info)) {
      return reject(new TypeError('Report is not a valid object.'));
    }

    info.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
