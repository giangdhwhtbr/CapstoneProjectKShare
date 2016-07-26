/**
 * Created by Duc Duong on 7/17/2016.
 */
"use strict";

const TagController = require('./tag-controller');

module.exports = class TagRoutes {
  static init(router) {
    router
      .route('/api/tags')
      .get(TagController.getAllTags)
      .post(TagController.createTag);

    router.route('/api/tags/:id')
      .delete(TagController.deleteTag)
      .get(TagController.getArticleByTagId);
  }
}
