import { Injectable } from '@angular/core';
import { KSpace } from '../interface/kspace';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KSpaceService {
    private _kspaceUrl = '/api/kspace/:id';

    constructor(private _http:Http) {
    }

    getAllKSpace():Observable<KSpace[]> {
        return this._http.get(this._kspaceUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getKSpaceById(id:string):Observable<KSpace> {
        return this._http.get(this._kspaceUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    finish(id:string){
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http
            .put(this._kspaceUrl.replace(':id',id), options)
            .map((r) => r.json());
    }

    addKSpace(learner:string, lecturer:string, requestId:string, requestTitle:string, offerId:string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let _kspace = JSON.stringify({
            lecturer: lecturer,
            learner: learner,
            requestId: requestId,
            requestTitle: requestTitle,
            offerId: offerId,
        });
        console.log(_kspace);
        return this._http
            .post(this._kspaceUrl.replace(':id', ''), _kspace, options)
            .map((r) => r.json());
    }

    createReview(data):Observable <any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        var api = '/api/kspace/:id/review';
        return this._http.post(api.replace(':id', data.id), data, options)
            .map((r) => r.json());
    }

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error || 'server error');
    }

}
