import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  server = 'https://fhir.eole-consulting.io/api/';

  constructor(private http: HttpClient) { };

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({'Content-Type': 'application/json'});
  };

  getUsers(): Promise<any> {
    return this.http.get(this.server + "practitioner")
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  getPatient(): Promise<any> {
    return this.http.get(this.server + "patient")
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
