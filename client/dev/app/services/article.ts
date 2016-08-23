/**
 * Created by Duc Duong on 7/13/2016.
 */
import { Injectable } from '@angular/core';
import { Article } from '../interface/article';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {
    private _requestsUrl = '/api/article/:id';
    private _requestsGetDeArtUrl = '/api/art/de/:id';
    private _articleUserUrl = '/api/articles-user';
    private _searchArticleUrl = '/api/full-search-article';

    private _artKnw='/api/art/knw/:id';

    private _cmtUrl="/api/comment/article/:artId/:cmtId";

    private _cmtLike="/api/comment/like/:artId/:cmtId/:user";
    private _cmtUnLike="/api/comment/unlike/:artId/:cmtId/:user";

    private _artLike="/api/art/like/:artId/:user";
    private _artUnLike="/api/art/unlike/:artId/:user";

    private _artProfile ="/api/articles-user/:username";

    constructor(private _http:Http) {
    }

    getAllArts(num: number):Observable<any[]> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _data = JSON.stringify({
            num: num
        });
        return this._http.put(this._requestsUrl.replace(':id', ''), _data, options)
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getAllArtAdmin(): Observable<any[]> {
        return this._http.get("/api/articles-admin")
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //search request
    searchArticle(search: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _search = JSON.stringify({
            text: search
        });
        return this._http
            .post(this._searchArticleUrl, _search, options)
            .map((r) => r.json());
    }

    getAllDeArts():Observable<any[]> {
        return this._http.get(this._requestsGetDeArtUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //get "num" article which user's ownknowledgeIds same with tagid of article
    getArticlesByUserTags(tags: string[], num: number): Observable<Article[]> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify({
            userTags: tags,
            x: num
        });

        return this._http.post(this._articleUserUrl,_data,options )
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getArtByKnwId(id:string):Observable<any[]> {
        return this._http.get(this._artKnw.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }
    getArtsByUsername(name:string):Observable<any[]> {
        return this._http.get(this._artProfile.replace(':username', name))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //get articles which user's ownknowledgeIds not same with tagid of article
    getArticleExceptUserTags(tags: string[], num: number): Observable<Article[]> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify({
            userTags: tags,
            x: num
        });

        return this._http.put(this._articleUserUrl,_data,options )
            .map((r) => r.json())
            .catch(this.handleError);
    }

    addArticle(_title:string, _content:string, oldTag:any[], newTag:any[], stt:any, user:string):Observable<any> {
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let _data = JSON.stringify(
            {
                art: {
                    author: user,
                    title: _title,
                    content: _content,
                    tags: oldTag,
                    status: stt
                },
                newTag: newTag
            }
        );
        return this._http
            .post(this._requestsUrl.replace(':id', ''), _data, options)
            .map((r) => r.json());
    }

    addComment(artId:string,user:string,content:string){
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let _comment = JSON.stringify(
            {
                artId: artId,
                user:user,
                content:content
            }
        );
        return this._http
            .post(this._cmtUrl.replace(':artId','').replace('/:cmtId',''), _comment, options)
            .map((r) => r.json());
    }

    editComment(artId:string,cmtId:string,content:string){
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let _cmt = JSON.stringify(
            {
                content: content
            }
        );
        return this._http
            .put(this._cmtUrl.replace(':artId',artId).replace(':cmtId',cmtId), _cmt, options)
            .map((r) => r.json());
    }

    removeComment(artId:string,cmtId:string):Observable<any>{
        return this._http.delete(this._cmtUrl.replace(':artId',artId).replace(':cmtId',cmtId)).map((r) => r.json());
    }
    //action like comment
    likeComment(artId:string,cmtId:string,user:string):Observable<any> {
        return this._http.get(this._cmtLike.replace(':artId',artId).replace(':cmtId',cmtId).replace(':user',user))
            .map((r) => r.json())
            .catch(this.handleError);
    }
    unlikeComment(artId:string,cmtId:string,user:string):Observable<any> {
        return this._http.get(this._cmtUnLike.replace(':artId',artId).replace(':cmtId',cmtId).replace(':user',user))
            .map((r) => r.json())
            .catch(this.handleError);
    }
    //action like article
    likeArt(artId:string,user:string):Observable<any> {
        return this._http.get(this._artLike.replace(':artId',artId).replace(':user',user))
            .map((r) => r.json())
            .catch(this.handleError);
    }
    unlikeArt(artId:string,user:string):Observable<any> {
        return this._http.get(this._artUnLike.replace(':artId',artId).replace(':user',user))
            .map((r) => r.json())
            .catch(this.handleError);
    }


    getArtById(id:string):Observable<any> {
        return this._http.get(this._requestsUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    activeArt(id:string):Observable<any> {
        return this._http.get(this._requestsGetDeArtUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }


    deactivateArticle(id:string):Observable<any> {
        return this._http
            .delete(this._requestsUrl.replace(':id', id))
            .map((r) => r.json());
    }

    //deleteRequestById(id:string):Observable<any> {
    //  return this._http
    //    .delete(this._requestsUrl.replace(':id', id))
    //    .map((r) => r.json());
    //}

    updateArtById(art:any, newTag:any[], id:string):Observable<any> {
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let _data = JSON.stringify(
            {
                art: art,
                newTag: newTag
            }
        );
        return this._http
            .put(this._requestsUrl.replace(':id', id), _data, options)
            .map((r) => r.json());
    }

}
