/**
 * Created by Duc Duong on 8/10/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagerService{
    private _url = '/api/page/col/:start/:stt';
    private _urlTot = '/api/page/col/:stt';

    constructor(private _http:Http) {
    }

    getAPage(col:string,start:number,stt:string):Observable<any[]> {
        return this._http.get(this._url.replace(':start', start).replace(':stt', stt).replace('col',col))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getTotalNum(col:string,stt:string):Observable<any[]> {
        return this._http.get(this._urlTot.replace(':stt', stt).replace('col',col))
            .map((r) => r.json())
            .catch(this.handleError);
    }


}