"use strict";

const OfferDAO = require('../dao/offer-dao');

module.exports = class OfferController {
  static getAll(req, res) {
      OfferDAO
        .getAll()
        .then(offers => res.status(200).json(offers))
        .catch(error => res.status(400).json(error));
  }

  static createOffer(req, res) {
      let _offer = req.body;
      
      OfferDAO
        .createOffer(_offer)
        .then(offer => res.status(201).json(offer))
        .catch(error => res.status(400).json(error));
  }

//get offer by request Id
  static getOfferByRequestId(req,res) {
    if(req.params && req.params.id) {
      OfferDAO
        .getOfferByRequestId(req.params.id)
        .then(offers => res.status(200).json(offers))
        .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Offer Id in request"
      });
    }
  }

static updateOffer(req, res){
    if(req.params && req.params.id) {
      var currentDate = new Date();
        OfferDAO.getOfferById(req.params.id)
          .then(offer => {
            offer.userId = req.body.userId,
            offer.requestId = req.body.requestId,
            offer.numOfLecture = req.body.numOfLecture,
            offer.price = req.body.price,
            offer.message = req.body.message,
            offer.modifiedDate = currentDate,

            // res.status(200).json(request);
            OfferDAO.updateOfferById(offer)
              .then(offer => res.status(200).json(offer))
              .catch(error => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Offer id in offer"
      });
    }
  }

  static deleteOffer(req, res) {
    let _id = req.params.id;

    OfferDAO
      .deleteOffer(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
