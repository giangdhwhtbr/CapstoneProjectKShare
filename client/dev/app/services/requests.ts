import { Injectable } from '@angular/core';
import { Request } from '../interface/request';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
    private _requestsUrl = '/api/requests/:id';
    private _requestUserUrl = '/api/requests-user';
    private _requestsAdminUrl = '/api/requests-admin/:id';
    private _getKnowledgeByParentUrl = '/api/knowledges/parent/:id';
    private _searchRequetsUrl = '/api/requests-search/:id';
    private _statusSubcriberUrl = '/api/requests-subcriber/:id';
    private _requestStatusUrl = '/api/requests-status/:id';
    private _kspaceUrl = '/api/kspace-request/:rid';

    constructor(private _http: Http) {
    }

    getAllRequests(num: number): Observable<Request[]> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify({
            num: num
        });
        return this._http.put(this._requestUserUrl.replace(':id', ''), _data, options)
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getKspaceByRId(id: string): Observable<Request[]> {
        return this._http.get(this._kspaceUrl.replace(':rid', id))
            .map(kspace => kspace.json());
    }

    //get all request which user's ownknowledgeIds same with tagid of request
    getRequestByUserTags(tags: string[], num: number): Observable<Request[]> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify({
            userTags: tags,
            x: num
        });

        return this._http.put(this._requestsUrl.replace(':id', ''), _data, options)
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //get all request which user's ownknowledgeIds not same with tagid of request
    getRequestExceptUserTags(tags: string[], num: number): Observable<Request[]> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify({
            userTags: tags,
            x: num
        });

        return this._http.post(this._requestUserUrl, _data, options)
            .map((r) => r.json())
            .catch(this.handleError);
    }

    getAllRequestAdmin(): Observable<Request[]> {
        return this._http.get(this._requestsAdminUrl.replace(':id', ''))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    addRequest(request: Request, content: string, oldTag: any[], newTag: any[]): Observable<any> {

        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify(
            {
                request: {
                    title: request.title,
                    description: content,
                    knowledgeId: request.knowledgeId,
                    user: request.user,
                    tags: oldTag
                },
                newTag: newTag
            }
        );
        return this._http
            .post(this._requestsUrl.replace(':id', ''), _data, options)
            .map((r) => r.json());
    }

    getRequestById(id: string): Observable<any> {
        return this._http.get(this._requestsUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //delete templates
    deleteRequest(request: Request): Observable<any> {
        return this._http
            .delete(this._requestsUrl.replace(':id', request._id))
            .map((r) => r.json());
    }

    deleteRequestById(id: string): Observable<any> {
        return this._http
            .delete(this._requestsUrl.replace(':id', id))
            .map((r) => r.json());
    }

    updateRequest(request: Request, oldTag: any[], newTag: any[]): Observable<any> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _data = JSON.stringify(
            {
                rq: {
                    _id: '',
                    title: request.title,
                    description: request.description,
                    knowledgeId: request.knowledgeId,
                    status: request.status,
                    tags: oldTag,
                    subscribers: request.subscribers
                },
                newTag: newTag
            }
        );
        console.log(_data);
        return this._http
            .put(this._requestsUrl.replace(':id', request._id), _data, options)
            .map((r) => r.json());
    }

    getRequestByKnowledgeId(id: string): Observable<any> {
        return this._http
            .post(this._requestsUrl.replace(':id', id), '')
            .map((r) => r.json());
    }

    // get child back.knowledge from parent back.knowledge
    getKnowledgeByParent(id: string): Observable<any> {
        return this._http.get(this._getKnowledgeByParentUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //add a subcriber to templates subscribers
    updateSubcriber(id: string, subcriber: string): Observable<any> {
        let header = new Headers;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _subcriber = JSON.stringify({
            subcriber: subcriber
        });
        return this._http.post(this._statusSubcriberUrl.replace(':id', id), _subcriber, options)
            .map((r) => r.json());
    }

    //change status request
    changeStatusRequest(id: string): Observable<any> {
        return this._http.get(this._requestStatusUrl.replace(':id', id))
            .map((r) => r.json());
    }

    //search request
    searchRequest(search: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _search = JSON.stringify({
            text: search
        });
        return this._http
            .post(this._searchRequetsUrl.replace(':id', ''), _search, options)
            .map((r) => r.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
