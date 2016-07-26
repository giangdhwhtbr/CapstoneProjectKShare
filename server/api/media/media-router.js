/**
 * Created by Duc Duong on 6/13/2016.
 */
"use strict";

const mediaController = require('./media-controller');
var multer = require("multer");
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    var type = path.extname(file.originalname);
    cb(null,  Date.now()+"-"+ req.sessionID+type)
  }
})


module.exports = class mediaRoutes {
  static init(router) {
    router
      .route('/api/media')
      .post( multer({ storage: storage}).array("uploads[]", 12),mediaController.createMedia)
      .get(mediaController.getAllMedia);

    router.route('/api/media/:file(*)')
      .get(mediaController.downloadMedia);

  }
}
