//long

"use strict";
const mongoose = require('mongoose');
const kSpaceDAO = require('../dao/kspace-dao');

module.exports = class kSpaceController {
  //get all kspaces controller
  static getAll(req, res) {
    kSpaceDAO
      .getAll()
      .then(kspaces => res.status(200).json(kspaces))
      .catch(error => res.status(400).json(error));
  }

  //get a kspace by Id controller
  static getKSpaceById(req, res) {
    if(req.params && req.params.id) {
      kSpaceDAO
        .getKSpaceById(req.params.id)
        .then(kspace => res.status(200).json(kspace))
        .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No KSpace ID in request"
      });
    }
  }

  //create a new kspace controller
  static createNew(req, res) {
    var currentDate = new Date();
    var kspace = {
      lectureId : req.body.lectureId,
      learnerId  : req.body.learnerId,
      requestId: req.body.requestId,
      offerId: req.body.offerId,
      createdAt: req.body.createdAt,
    }

    console.log(kspace);
    
    kSpaceDAO
      .createNew(kspace)
      .then(kspace => res.status(200).json(kspace))
      .catch(error => res.status(400).json(error));
  }
  
  
  //finish a kspace by ID controller (update finishedAt of a kspace)
  static finishKSpace(req, res){
    var currentDate = new Date();
    
    if(req.params && req.params.id) {
        kSpaceDAO.getKSpaceById(req.params.id)
          .then(kspace => {
            kspace.finishedAt = currentDate;

            kSpaceDAO.updateKSpaceById(kspace)
              .then(kspace => res.status(200).json(kspace))
              .catch(error => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Kspace ID"
      });
    }
  }
  
}
