import { Injectable } from 'angular2/core';
import { Request } from '../interface/request';
import { Http, Response, Headers,RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export  class RequestService {
  private _requestsUrl = '/api/requests/:id';
  private _knowledgesUrl = '/api/knowledges/:id';
  constructor(private _http: Http) { }

  getAllRequests(): Observable<Request[]> {
    return this._http.get(this._requestsUrl.replace(':id',''))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  addRequest(request: Request):Observable<any>{
    let header = new Headers;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let _request = JSON.stringify({
      title : request.title,
      description : request.description,
      knowledgeId: request.knowledgeId
    });
    return this._http
              .post(this._requestsUrl.replace(':id',''),_request,options)
              .map((r) => r.json());
  }

  getRequestById(id: string):Observable<any> {
     return this._http.get(this._requestsUrl.replace(':id',id))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  deleteRequest(request: Request):Observable<any> {
  
    return this._http
              .delete(this._requestsUrl.replace(':id',request._id))
              .map((r) => r.json());
  }
  
  deleteRequestById(id: string):Observable<any> {
    return this._http
              .delete(this._requestsUrl.replace(':id',id))
              .map((r) => r.json());
  }
  
  updateRequest(request: Request):Observable<any>{
    let header = new Headers;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let _request = JSON.stringify({
      _id : '',
      title : request.title,
      description : request.description,
      knowledgeId: request.knowledgeId
    });
    console.log(_request);
    return this._http
              .put(this._requestsUrl.replace(':id',request._id),_request,options)
              .map((r) => r.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
