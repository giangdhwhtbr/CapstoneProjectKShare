"use strict";

const ReportController = require('./report-controller');

module.exports = class OfferRoutes {
    static init(router) {
      router
        .route('/api/reports')
        .get(ReportController.getAll)
        .post(ReportController.createReport);

      router
        .route('/api/reports/:id')
        .get(ReportController.getReportById)
        .put(ReportController.updateReport);
    }
}
