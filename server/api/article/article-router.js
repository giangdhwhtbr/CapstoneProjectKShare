/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const ArticleController = require('./article-controller');

module.exports = class ArticleRoutes {
    static init(router) {
        router
            .route('/api/article')
            .put(ArticleController.getAllArticles)
            .post(ArticleController.createArticle);

        router
            .route('/api/article/:id')
            .delete(ArticleController.deactivateArticle)
            .get(ArticleController.getArticleById)
            .put(ArticleController.updateArticleById);


        router
            .route('/api/articles-user')
            .post(ArticleController.getArticlesByTagsOfUser)
            .put(ArticleController.getArticlesExceptTagsOfUser);

        router.route('/api/art/de')
            .get(ArticleController.getDeArticle);


        router.route('/api/art/knw/:id')
            .get(ArticleController.getArticleByKnwId);

        router.route('/api/art/de/:id')
            .get(ArticleController.activeArt);

        router.route('/api/page/article/:start/:stt')
            .get(ArticleController.getAPage);

        router.route('/api/page/articletot/:stt')
            .get(ArticleController.getTot);

        router.route('/api/comment/article')
            .post(ArticleController.addComment);

        router.route('/api/comment/like/:artId/:cmtId/:user')
            .get(ArticleController.likeComment);

        router.route('/api/comment/unlike/:artId/:cmtId/:user')
            .get(ArticleController.unlikeComment);

        router.route('/api/comment/article/:artId/:cmtId')
            .put(ArticleController.editComment)
            .delete(ArticleController.removeComment);

        router.route('/api/art/like/:artId/:user')
            .get(ArticleController.likeArticle);
        router.route('/api/art/unlike/:artId/:user')
            .get(ArticleController.unlikeArticle);


    }
}
