/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const ArticleDAO = require('./article-dao');
const TagDAO = require('../tags/tag-dao');
const KnwDAO = require('../knowledge/knowledge-dao');

module.exports = class ArticleController {
    static getAllArticles(req, res) {
        ArticleDAO
            .getAllNf(req.body.num)
            .then(articles => {
                res.status(200).json(articles);
            })
            .catch(error => res.status(400).json(error));
    }

    static getArticleByKnwId(req, res) {
        if (req.params && req.params.id) {
            ArticleDAO
                .getArticleByKnwId(req.params.id)
                .then((arts) => {
                    res.status(200).json(arts);
                }).catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
            });
        }
    }

    static likeArticle(req,res){
        if (req.params && req.params.artId && req.params.user  ) {
            ArticleDAO.getArticleById(req.params.artId).then(article => {
                let i = article.userLiked.indexOf(req.params.user);
                let j = article.userUnLiked.indexOf(req.params.user);
                if(i<0){
                    article.like+=1;
                    article.userLiked.push(req.params.user);
                    if(j>=0){
                        article.userUnLiked.splice(j,1);
                    }
                }
                article.save();
                res.status(200).json(article.like);
            }).catch((error)=>res.status(400).json(error));
        }
    }
    static unlikeArticle(req,res){
        if (req.params && req.params.artId && req.params.user  ) {
            ArticleDAO.getArticleById(req.params.artId).then(article => {
                let i = article.userLiked.indexOf(req.params.user);
                let j = article.userUnLiked.indexOf(req.params.user);
                if(j<0){
                    article.like-=1;
                    article.userUnLiked.push(req.params.user);
                    if(i>=0){
                        article.userLiked.splice(i,1);
                    }
                }
                article.save();
                res.status(200).json(article.like);
            }).catch((error)=>res.status(400).json(error));
        }
    }

    static getArticleByUser(req, res) {
        ArticleDAO
            .getArticleByUser(req.params.username)
            .then(articles => {
                res.status(200).json(articles);
            })
            .catch(error => res.status(400).json(error));
    }

    static fullTextSearchArticle(req, res) {

    ArticleDAO
      .fullTextSearchArticle(req.body.text)
      .then(article => res.status(200).json(article))
      .catch(error => res.status(400).json(error));
  }

    static getAPage(req,res){

        if (req.params && req.params.start) {
            let start = req.params.start;
            ArticleDAO.getAPage(start,req.params.stt).then((arts)=>{
                if(arts.length==0 && start!=0){
                    ArticleDAO.getAPage(start-10,req.params.stt).then((artsBU)=>{
                        res.status(200).json(artsBU);
                    }).catch(err=> res.status(400).json(err));
                }else{
                    res.status(200).json(arts);
                }

            }).catch(err=>res.status(400).json(err));
        }
    }

    static getTot(req,res){

        if (req.params && req.params.stt) {
            ArticleDAO.getTot(req.params.stt).then((num)=>{
                res.status(200).json(num);
            }).catch(err=> res.status(400).json(err));
        }
    }

    static getDeArticle(req, res) {
        ArticleDAO
            .getAll()
            .then(articles => {
                for (let i = articles.length - 1; i >= 0; i--) {
                    if (articles[i].status != "deactivate") {
                        let index = articles.indexOf(articles[i]);
                        if (index > -1) {
                            articles.splice(index, 1);
                        }
                    }
                }
                res.status(200).json(articles);
            })
            .catch(error => res.status(400).json(error));
    }

    static getArtAdmin(req,res){
        ArticleDAO
            .getAll()
            .then(articles => {
                res.status(200).json(articles);
            })
            .catch(error => res.status(400).json(error));
    }

    static getArticlesByTagsOfUser(req, res) {
        ArticleDAO
            .getArticlesByTagsOfUser(req.body.userTags, req.body.x)
            .then(articles => res.status(200).json(articles))
            .catch(error => res.status(400).json(error));
    }

    static getArticlesExceptTagsOfUser(req, res) {
        ArticleDAO
            .getArticlesExceptTagsOfUser(req.body.userTags, req.body.x)
            .then(articles => res.status(200).json(articles))
            .catch(error => res.status(400).json(error));
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

    static activeArt(req, res) {
        if (req.params && req.params.id) {
            ArticleDAO
                .getArticleById(req.params.id)
                .then(art => {
                    art.status="private";
                    art.save();
                    res.status(200).json(art);
                }).catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
            });
        }
    }

    static createArticle(req, res) {
        let _data = req.body;

        //create new tags in database
        TagDAO.createArrayTag(_data.newTag).then((tags)=> {
            //create a new article
            ArticleDAO
                .createArticle(_data.art)
                .then(article => {
                    // push the new tag to the new article
                    for (let e of tags) {
                        article.tags.push(e);
                    }

                    //get full data tags
                    TagDAO.getTagByIds(article.tags).then((ts)=> {
                        // clear data article in the tags of article
                        ts.map((e, i)=> {
                            ts[i].articles = [];
                            ts[i].request=[];
                        });
                        //get list name
                        var names = [];
                        for (let e of ts) {
                            names.push(e.name);
                        }
                        // insert knowledge (same name with tags) to article
                        KnwDAO.getKnwByNames(names).then((knws)=> {
                            knws.map((e, i)=> {
                                article.knowledge.push(e);
                            });
                            //pour full data of tag to article
                            article.tagsFD = ts;
                            article.save();
                            res.status(200).json(article._id);
                        }).catch((err)=>res.status(400).json(err));


                    }).catch(err=>res.status(400).json(err));

                }).catch(error => res.status(400).json(error));
        }).catch((error)=>res.status(400).json(error));
    }


    static addComment(req,res){
        let _cmt = req.body;
        let comment={
            user:_cmt.user,
            content:_cmt.content
        };
        ArticleDAO.getArticleById(_cmt.artId).then((art)=>{
            art.comments.unshift(comment);
            art.save();
            res.status(200).json(art.comments);
        }).catch((error)=>res.status(400).json(error));
    }

    static editComment(req,res){
        if (req.params && req.params.artId && req.params.cmtId ) {
            let _comment = req.body;
            let cmtId = req.params.cmtId;
            ArticleDAO.getArticleById(req.params.artId).then(article => {
                for(let cmt of article.comments){
                    if(cmt._id==cmtId){
                        cmt.content= _comment.content;
                        cmt.updateAt= new Date();
                        article.save();
                        break;
                    }
                }
                res.status(200).json(article.comments);
            }).catch((error)=>res.status(400).json(error));
        }
    }

    static likeComment(req,res){
        if (req.params && req.params.artId && req.params.cmtId && req.params.user  ) {
            ArticleDAO.getArticleById(req.params.artId).then(article => {
                for(let cmt of article.comments){
                    if(cmt._id==req.params.cmtId){
                        let i = cmt.userLiked.indexOf(req.params.user);
                        let j = cmt.userUnLiked.indexOf(req.params.user);
                        if(i<0){
                            cmt.like+=1;
                            cmt.userLiked.push(req.params.user);
                            if(j>=0){
                                cmt.userUnLiked.splice(j,1);
                            }
                        }
                        article.save();
                        break;
                    }
                }
                res.status(200).json(article.comments);
            }).catch((error)=>res.status(400).json(error));
        }
    }
    static unlikeComment(req,res){
        if (req.params && req.params.artId && req.params.cmtId && req.params.user  ) {
            ArticleDAO.getArticleById(req.params.artId).then(article => {
                for(let cmt of article.comments){
                    if(cmt._id==req.params.cmtId){
                        let i = cmt.userLiked.indexOf(req.params.user);
                        let j = cmt.userUnLiked.indexOf(req.params.user);
                        if(j<0){
                            cmt.like-=1;
                            cmt.userUnLiked.push(req.params.user);
                            if(i>=0){
                                cmt.userLiked.splice(i,1);
                            }
                        }
                        article.save();
                        break;
                    }
                }
                res.status(200).json(article.comments);
            }).catch((error)=>res.status(400).json(error));
        }
    }

    static removeComment(req,res){
        if (req.params && req.params.artId && req.params.cmtId) {
            let _artId = req.params.artId;
            let _cmtId = req.params.cmtId;
            ArticleDAO.getArticleById(_artId).then((art)=>{
                for(let i = 0 ; i < art.comments.length;i++){
                    console.log(art.comments[i]);
                    if(art.comments[i]._id==_cmtId){
                        console.log(art.comments[i]);
                        art.comments.splice(i,1);
                        break;
                    }
                }
                art.save();
                res.status(200).json(art.comments);
            }).catch((error)=>res.status(400).json(error));
        }

    }

    static updateArticleById(req, res) {
        if (req.params && req.params.id) {
            let _data = req.body;

            ArticleDAO.getArticleById(req.params.id)
                .then(article => {

                    article.title = _data.art.title;
                    article.content = _data.art.content;
                    article.tags = _data.art.tags;
                    article.status = _data.art.status;
                    article.updatedAt = new Date();

                    TagDAO.createArrayTag(_data.newTag).then((tags)=> {

                        ArticleDAO.updateArticle(article)
                            .then((articleUpdated) => {

                                articleUpdated.knowledge = [];

                                tags.map((e, i)=> {
                                    articleUpdated.tags.push(e);
                                });

                                TagDAO.getTagByIds(articleUpdated.tags).then((ts)=> {


                                    ts.map((e, i)=> {
                                        ts[i].articles = [];
                                    });

                                    //get list name
                                    var names = [];
                                    for (let e of ts) {
                                        names.push(e.name);
                                    }
                                    // insert knowledge (same name with tags) to article
                                    KnwDAO.getKnwByNames(names).then((knws)=> {
                                        knws.map((e, i)=> {
                                            article.knowledge.push(e);
                                        });
                                        //pour full data of tag to article
                                        articleUpdated.tagsFD = ts;
                                        articleUpdated.save();
                                        res.status(200).json(articleUpdated);
                                    }).catch((err)=>res.status(400).json(err));


                                }).catch(err=>res.status(400).json(err));


                            }).catch(error => res.status(400).json(error));

                    }).catch((error)=>res.status(400).json(error));

                }).catch(error => res.status(400).json(error));
        }
    }

    static deactivateArticle(req, res) {
        let _id = req.params.id;

        ArticleDAO
            .deactivateArticleById(_id)
            .then((mes) => res.status(200).json(mes))
            .catch(error => res.status(400).json(error));
    }


}
