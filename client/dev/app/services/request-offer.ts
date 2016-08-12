import { Injectable } from '@angular/core';
import { Offer } from '../interface/offer';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OfferService {
  private _Url = '/api/offers/:id';
  private _OfferUrl = '/api/offers/:id/:num';
  constructor(private _http: Http) { }


  addOffer(offer: Offer): Observable<any> {
    let header = new Headers;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let _offer = JSON.stringify({
      price: offer.price,
      requestId: offer.requestId,
      numberOfLecture: offer.numOfLecture,
      message: offer.message,
      user: offer.user
    });
    //console.log(_offer);
    return this._http
      .post(this._Url.replace(':id', ''), _offer, options)
      .map((r) => r.json());
  }

  getOfferByRequestId(id: string, num:string): Observable<any> {
    let header = new Headers;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let _data = JSON.stringify({
      id: id,
      num: num
    });
    console.log(_data);
    return this._http.put(this._Url.replace(':id', ''),_data,options)
      .map((r) => r.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}