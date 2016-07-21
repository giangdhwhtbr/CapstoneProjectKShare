/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const ArticleDAO = require('./article-dao');
const TagDAO = require('../tags/tag-dao');

module.exports = class ArticleController {
  static getAllArticles(req, res) {
    ArticleDAO
      .getAll()
      .then(articles => res.status(200).json(articles))
      .catch(error => res.status(400).json(error));
  }

  static getArticleByTagId(req, res) {
    if (req.params && req.params.id) {
      ArticleDAO
        .getArticleByTagId(req.params.id)
        .then(art => res.status(200).json(art))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No article Id in templates"
      });
    }
  }

  static getArticleById(req, res) {
    if (req.params && req.params.id) {
      ArticleDAO
        .getArticleById(req.params.id)
        .then(art => res.status(200).json(art))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No article Id in templates"
      });
    }
  }

  static createArticle(req, res) {
    let _data = req.body;

    TagDAO.createArrayTag(_data.newTag).then((tags)=> {
      ArticleDAO
        .createArticle(_data.art)
        .then(article => {
          tags.map((e, i)=> {
            article.tags.push(e);
          });
          article.save();
          res.status(201).json(article);
        }).catch(error => res.status(400).json(error));
    }).catch((error)=>res.status(400).json(error));
  }


  static updateArticleById(req, res) {
    if (req.params && req.params.id) {
      let _data = req.body;

      ArticleDAO.getArticleById(req.params.id)
        .then(article => {

          article.title = _data.art.title;
          article.content = _data.art.content;
          article.tags = _data.art.tags;

          TagDAO.createArrayTag(_data.newTag).then((tags)=> {

            ArticleDAO.updateArticle(article)
              .then((articleUpdated) => {

                tags.map((e, i)=> {
                  articleUpdated.tags.push(e);
                });
                articleUpdated.save();
                res.status(200).json(articleUpdated)
              }).catch(error => res.status(400).json(error));

          }).catch((error)=>res.status(400).json(error));

        }).catch(error => res.status(400).json(error));
    }
  }


  static deleteArticle(req, res) {
    let _id = req.params.id;

    ArticleDAO
      .deleteArticleById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

}
