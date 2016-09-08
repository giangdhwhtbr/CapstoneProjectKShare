/**
 * Created by Duc Duong on 7/19/2016.
 */
import { Injectable } from '@angular/core';
import { Tag } from '../interface/tag';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {
    private _tagUrl = '/api/tags/:id';
    private _activeTag = '/api/tags/active/:id';
    private _reqUrl = '/api/tag/req/:id';
    private _deactiveTag = '/api/tag/deactive/:id';
    private _tagAdminUrl ='/api/tags-admin';

    constructor(private _http:Http) {
    }

    getAllTag():Observable<any[]> {
        return this._http.get(this._tagUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }
    getAllTagAdmin():Observable<any[]> {
        return this._http.get(this._tagAdminUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getAllDeactiveTag():Observable<any[]> {
        return this._http.get(this._deactiveTag.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getArtByTag(id:string):Observable<any[]> {
        return this._http.get(this._tagUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getReqByTag(id:string):Observable<any[]> {
        return this._http.get(this._reqUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getTagsByIds(ids:string[]):Observable<any[]> {
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let _data = JSON.stringify(
            {
                ids: ids
            }
        );
        return this._http
            .post('/api/tags/TagNames', _data, options)
            .map((r) => r.json()).catch(this.handleError);
    }

    activeTag(id:string):Observable<any[]> {
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.get(this._activeTag.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    deactivateTag(id:string):Observable<any> {
        return this._http
            .delete(this._tagUrl.replace(':id', id))
            .map((r) => r.json()).catch(this.handleError);
    }

}
