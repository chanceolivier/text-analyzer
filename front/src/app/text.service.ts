import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TextService {
  constructor(private http: Http) {}

  saveText(text: string) {
    return this.http.post('http://10.0.0.10:3000/api/Texts', { text })
    .map((res:Response) => res.json());
  }

  getStatistics(id: string) {
    return this
    .http
    .get(`http://10.0.0.10:3000/api/Texts/statistics/${id}`)
    .map((res:Response) => res.json());;
  }
}
