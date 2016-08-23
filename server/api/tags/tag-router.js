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

        router.route('/api/tags-admin')
            .get(TagController.getAllTagsAdmin);

        router.route('/api/tag/req/:id')
            .get(TagController.getReqByTagId);

        router.route('/api/tags/TagNames')
            .post(TagController.getTagByIds);

        router.route('/api/tags/active/:id')
            .get(TagController.activeTag);

        router.route('/api/tag/deactive/')
            .get(TagController.getAllDeactivatedTags);


        router.route('/api/page/tag/:start/:stt')
            .get(TagController.getAPage);

        router.route('/api/page/tagtot/:stt')
            .get(TagController.getTot);
    }
}
