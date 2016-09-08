"use strict";

const ReportController = require('./report-controller');

module.exports = class OfferRoutes {
    static init(router) {
      router
        .route('/api/reports')
        .post(ReportController.createReport);

      router
        .route('/api/reports/:id')
        .get(ReportController.getReportById)
        .put(ReportController.updateReport);

    router
      .route('/api/reports-status/:status')
      .get(ReportController.getAll);
    }
}
