import { Injectable } from '@angular/core';
import { KSpace } from '../interface/kspace';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KSpaceService {
  private _knowledgesUrl = '/api/kspace/:id';
  constructor(private _http: Http) { }

  addKSpace(learner:string, lecturer:string, requestId:string, offerId:string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let _kspace = JSON.stringify({
    lecturer: lecturer,
    learner: learner,
    requestId: requestId,
    offerId: offerId
    });
    return this._http
      .post(this._knowledgesUrl.replace(':id', ''), _kspace, options)
      .map((r) => r.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
