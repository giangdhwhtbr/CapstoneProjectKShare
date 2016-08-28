import { Injectable } from '@angular/core';
import { KSpace } from '../interface/kspace';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KSpaceService {
    private _kspaceUrl = '/api/kspace/:id';
    private _kspace_profile='/api/kspace-profile/:name';

    constructor(private _http:Http) {
    }

    getKspaceProfile(name:string):Observable<KSpace> {
        return this._http.get(this._kspace_profile.replace(':name', name))
            .map((r) => r.json())
            .catch(this.handleError);
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

    finish(id:string) {
        let header = new Headers;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http
            .put(this._kspaceUrl.replace(':id', id), options)
            .map((r) => r.json());
    }

    addKSpace(kspace: KSpace): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _kspace = JSON.stringify({
            lecturer: kspace.lecturer,
            learners: kspace.learners,
            requestId: kspace.requestId,
            requestTitle: kspace.requestTitle,
            offerId: kspace.offerId,
            tags: kspace.tags
        });
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

    createPublicKspace(guest:string): Observable <any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var api = '/api/public-kspace';

      return this._http.post(api,{name:guest}, options)
        .map((r) => r.json());
    }

    joinPublicKspace (guest: string, room: string): Observable <any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var api = '/api/public-kspace/:id';

      return this._http.put(api.replace(':id',room),{name:guest}, options)
        .map((r) => r.json());
    }

    checkPublicKspace(id: string) :Observable <any> {
      var api = '/api/public-kspace/:id';
      return this._http.get(api.replace(':id',id))
        .map((r) => r.json())
        .catch(this.handleError);
    }

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error || 'server error');
    }

}
