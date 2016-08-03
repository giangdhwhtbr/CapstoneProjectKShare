import { Injectable } from '@angular/core';
import { Report } from '../interface/report';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportService {
  private _Url = '/api/reports/:id';
  constructor(private _http: Http) { }


  addReport(report: Report): Observable<any> {
    let header = new Headers;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let _report = JSON.stringify({
      title: report.title,
      content: report.content,
      user: report.user,
      link: report.link,
      reportedUser: report.reportedUser
    });

    return this._http
      .post(this._Url.replace(':id', ''), _report, options)
      .map((r) => r.json());
  }

  getAllReports(): Observable<any> {
    return this._http
      .get(this._Url.replace(':id', ''))
      .map((r) => r.json());
  }

  deactivateReport(id: string): Observable<any> {
    let header = new Headers;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    let _report = JSON.stringify({
      status: 'deactive'
    });
    return this._http
      .put(this._Url.replace(':id', id), _report, options);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}