"use strict";

const ReportDAO = require('./report-dao');

module.exports = class ReportController {
  static getAll(req, res) {
      ReportDAO
        .getAll(req.params.status)
        .then(reports => res.status(200).json(reports))
        .catch(error => res.status(400).json(error));
  }

   static getReportById(req,res) {
    if(req.params && req.params.id) {
      ReportDAO
        .getReportById(req.params.id)
        .then(report => res.status(200).json(report))
        .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Requestid in templates"
      });
    }
  }

  static createReport(req, res) {
      let _report = req.body;

      ReportDAO
        .createReport(_report)
        .then(report => res.status(201).json(report))
        .catch(error => res.status(400).json(error));
  }

static updateReport(req, res){
    if(req.params && req.params.id) {
      var currentDate = new Date();
        ReportDAO.getReportById(req.params.id)
          .then(report => {
            report.status = req.body.status;

            ReportDAO.updateReportById(report)
              .then(report => res.status(200).json(report))
              .catch(error => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Report id in report"
      });
    }
  }

}
