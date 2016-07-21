/**
 * Created by Duc Duong on 6/13/2016.
 */
"use strict";
const mediaDAO = require('./media-dao');
var fs = require('fs');

module.exports = class mediaController {
  static createMedia(req,res){
    res.json(req.files);
  }
  static getAllMedia(req,res){
    // create download route);
    var path = require('path'); // get path

    var dir = path.resolve(".") + '/uploads/'; // give path
    fs.readdir(dir, function (err, list) { // read directory return  error or list

      if (err) {
        return res.json(err);
      }

      else {
        res.json(list);
      }


    });
  }
  static downloadMedia(req,res,next){
    var path = require('path');

    var file = req.params.file;

    var path = path.resolve(".") + '/uploads/' + file;

    res.download(path);

  }
}
