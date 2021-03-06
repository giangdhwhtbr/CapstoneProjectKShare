"use strict";

const OfferDAO = require('./offer-dao');

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

//get front.offer by templates Id
  static getOfferByRequestId(req,res) {
      OfferDAO
        .getOfferByRequestId(req.body.id, req.body.num)
        .then(offers => res.status(200).json(offers))
        .catch(error => res.status(400).json(error));
  }

static updateOffer(req, res){
    if(req.params && req.params.id) {
      var currentDate = new Date();
        OfferDAO.getOfferById(req.params.id)
          .then(offer => {
            offer.status = req.body.status;
            // res.status(200).json(templates);
            OfferDAO.updateOfferById(offer)
              .then(offer => res.status(200).json(offer))
              .catch(error => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Offer id in front.offer"
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
