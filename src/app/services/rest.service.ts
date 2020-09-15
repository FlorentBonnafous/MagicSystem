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

  getUsers(id : string): Promise<any> {
    return this.http.get(this.server + "practitioner/" + id)
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  getPatients(): Promise<any> {
    return this.http.get(this.server + "patient")
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

<<<<<<< HEAD
  getAppointment(id : string): Promise<any> {
    return this.http.get(this.server + "appointment?participant.actor.reference=Practitioner/"+ id)
=======
  getPatient(id : String): Promise<any> {
    return this.http.get(this.server + "patient/"+id)
>>>>>>> 840874440323614bbc6d28d9a9c8d01ab01c5071
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
