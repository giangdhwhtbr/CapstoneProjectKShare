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

    constructor(private _http:Http) {
    }

    getAllArts():Observable<any[]> {
        return this._http.get(this._requestsUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
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
                    ofUser: user,
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
