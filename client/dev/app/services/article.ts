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

  constructor(private _http:Http) {
  }

  getAllArts(): Observable<any[]> {
    return this._http.get(this._requestsUrl.replace(':id',''))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  addArticle(_title:string, _content:string,oldTag:string[],newTag:string[],stt:string,user:string):Observable<any> {
    let header = new Headers;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let _data = JSON.stringify(
      {
        art:{
          ofUser:user,
          title: _title,
          content: _content,
          tags:oldTag,
          status:stt
        },
        newTag:newTag
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

  //delete templates
  //deleteRequest(request:Request):Observable<any> {
  //  return this._http
  //    .delete(this._requestsUrl.replace(':id', request._id))
  //    .map((r) => r.json());
  //}

  //deleteRequestById(id:string):Observable<any> {
  //  return this._http
  //    .delete(this._requestsUrl.replace(':id', id))
  //    .map((r) => r.json());
  //}

  updateArtById(art:any,newTag:string[],id:string):Observable<any> {
    let header = new Headers;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let _data = JSON.stringify(
        {
          art:art,
          newTag:newTag
        }
    );
    return this._http
      .put(this._requestsUrl.replace(':id', id), _data, options)
      .map((r) => r.json());
  }
  //
  //getRequestByKnowledgeId(id:string):Observable<any> {
  //  return this._http
  //    .post(this._requestsUrl.replace(':id', id), '')
  //    .map((r) => r.json());
  //}
  //
  //// get child back.knowledge from parent back.knowledge
  //getKnowledgeByParent(id:string):Observable<any> {
  //  return this._http.get(this._getKnowledgeByParentUrl.replace(':id', id))
  //    .map((r) => r.json())
  //    .catch(this.handleError);
  //}
  //
  ////add a subcriber to templates subcribers
  //updateSubcriber(id:string, subcriber:string):Observable<any> {
  //  let header = new Headers;
  //  let headers = new Headers({'Content-Type': 'application/json'});
  //  let options = new RequestOptions({headers: headers});
  //  let _subcriber = JSON.stringify({
  //    subcriber: subcriber
  //  });
  //  return this._http.post(this._statusSubcriberUrl.replace(':id', id), _subcriber, options)
  //    .map((r) => r.json());
  //}
  //
  ////change status request
  //changeStatusRequest(id:string):Observable<any> {
  //  return this._http.get(this._requestStatusUrl.replace(':id', id))
  //    .map((r) => r.json());
  //}
  //
  ////search request
  //searchRequest(search:string):Observable<any> {
  //  let headers = new Headers({'Content-Type': 'application/json'});
  //  let options = new RequestOptions({headers: headers});
  //  let _search = JSON.stringify({
  //    text: search
  //  });
  //  return this._http
  //    .post(this._searchRequetsUrl.replace(':id', ''), _search, options)
  //    .map((r) => r.json());
  //}
  //
  //private handleError(error:Response) {
  //  console.error(error);
  //  return Observable.throw(error.json().error || 'Server error');
  //}

}
