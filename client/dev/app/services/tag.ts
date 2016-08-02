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

    constructor(private _http:Http) {
    }

    getAllTag():Observable<any[]> {
        return this._http.get(this._tagUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getArtByTag(id:string):Observable<any[]> {
        return this._http.get(this._tagUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

}
