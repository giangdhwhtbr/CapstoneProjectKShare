/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const ArticleController = require('./article-controller');

module.exports = class ArticleRoutes {
  static init(router) {
    router
      .route('/api/article')
      .get(ArticleController.getAllArticles)
      .post(ArticleController.createArticle);

    router.route('/api/article/:id')
      .delete(ArticleController.deleteArticle)
      .get(ArticleController.getArticleById)
      .put(ArticleController.updateArticleById);

  }
}
