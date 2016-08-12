"use strict";

const RequestDAO = require('./request-dao');
const TagDAO = require('../tags/tag-dao');

module.exports = class RequestController {
  static getAll(req, res) {
    RequestDAO
      .getAll(req.body.num)
      .then(requests => res.status(200).json(requests))
      .catch(error => res.status(400).json(error));
  }

  static getRequestsByTagsOfUser(req, res) {
    RequestDAO
      .getRequestsByTagsOfUser(req.body.userTags, req.body.x)
      .then(requests => res.status(200).json(requests))
      .catch(error => res.status(400).json(error));
  }

  static getRequestsExceptTagsOfUser(req, res) {
    RequestDAO
      .getRequestsExceptTagsOfUser(req.body.userTags, req.body.x)
      .then(requests => res.status(200).json(requests))
      .catch(error => res.status(400).json(error));
  }

  static getAllRequestForAdmin(req, res) {
    RequestDAO
      .getAllRequestForAdmin()
      .then(requests => res.status(200).json(requests))
      .catch(error => res.status(400).json(error));
  }

  static createRequest(req, res) {

    let _data = req.body;
    //create new tags in database
    TagDAO.createArrayTag(_data.newTag).then((tags) => {

      RequestDAO
        .createRequest(_data.request)
        .then((request) => {
          // push the new tag to the new request
          for (let e of tags) {
            request.tags.push(e);
          }
          request.save();
          res.status(201).json(request);
        }).catch(error => res.status(400).json(error));
    }).catch((error) => res.status(400).json(error));

  }

  static updateRequest(req, res) {
    if (req.params && req.params.id) {
      var currentDate = new Date();
      let _data = req.body;
      RequestDAO.getRequestById(req.params.id)
        .then(request => {
          request.title = _data.rq.title;
          request.description = _data.rq.description;
          request.knowledgeId = _data.rq.knowledgeId;
          request.modifiedDate = currentDate;
          request.status = _data.rq.status;
          request.tags = _data.rq.tags;
          request.status = _data.rq.status;
          console.log("go 0");
          TagDAO.createArrayTag(_data.newTag).then((tags) => {
            console.log("go 1");

            RequestDAO.updateRequestById(request).then(request => {
              if (tags.length > 0) {
                tags.map((e, i) => {
                  request.tags.push(e);
                });
                request.save();
              }
              console.log("go 2");
              res.status(200).json(request);
            }).catch(error => res.status(400).json(error));
          }).catch((error) => res.status(400).json(error));
        }).catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Request id in templates"
      });

    }
  }

  static getRequestById(req, res) {
    if (req.params && req.params.id) {
      RequestDAO
        .getRequestById(req.params.id)
        .then(request => res.status(200).json(request))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Requestid in templates"
      });
    }
  }

  //controler relate to full-text search function DAO
  static fullTextSearchRequest(req, res) {

    RequestDAO
      .fullTextSearchRequest(req.body.text)
      .then(request => res.status(200).json(request))
      .catch(error => res.status(400).json(error));
  }

  static getRequestByKnowledgeId(req, res) {
    if (req.params && req.params.id) {
      RequestDAO
        .getRequestByKnowledgeId(req.params.id)
        .then(requests => res.status(200).json(requests))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Knowledge Id in templates"
      });
    }
  }

  static getRequestByUser(req, res) {
    if (req.params) {
      RequestDAO
        .getRequestByUser(req.params.user, req.params.num)
        .then(requests => res.status(200).json(requests))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Knowledge Id in templates"
      });
    }
  }

  static deleteRequest(req, res) {
    let _id = req.params.id;

    RequestDAO
      .deleteRequest(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  //change status of a templates to deactive
  static changeStatusRequest(req, res) {
    var currentDate = new Date();
    if (req.params && req.params.id) {
      RequestDAO.getRequestById(req.params.id)
        .then(request => {
          request.modifiedDate = currentDate;
          request.status = "deactive"

          RequestDAO.updateRequestById(request)
            .then(request => res.status(200).json(request))
            .catch(error => res.status(400).json(error));
        })
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Request id in templates"
      });
    }
  }

  //change status of a templates to deactive
  static addSubcriber(req, res) {
    var currentDate = new Date();
    if (req.params && req.params.id) {
      RequestDAO.getRequestById(req.params.id)
        .then(request => {
          request.subcribers.push(req.body.subcriber);

          RequestDAO.updateRequestById(request)
            .then(request => res.status(200).json(request))
            .catch(error => res.status(400).json(error));
        })
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Request id in templates"
      });
    }
  }

  //paging on server

  static getAPage(req, res) {

    if (req.params && req.params.start) {
      RequestDAO.getAPage(req.params.start, req.params.stt).then((reqs) => {
        res.status(200).json(reqs);
      }).catch(err => res.status(400).json(error));
    }
  }
  static getTot(req, res) {

    if (req.params && req.params.stt) {
      RequestDAO.getTot(req.params.stt).then((num) => {
        res.status(200).json(num);
      }).catch(err => res.status(400).json(error));
    }
  }

}
