import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  server = 'https://fhir.eole-consulting.io/api/';

  constructor(private http: HttpClient) { };

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

  getPatient(id:String): Promise<any> {
    return this.http.get(this.server + "patient/"+id)
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  getAppointments(id : string): Promise<any> {
    return this.http.get(this.server + "appointment?participant.actor.reference=Practitioner/"+ id)
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  getAppointment(id : string): Promise<any> {
    return this.http.get(this.server + "appointment/"+ id)
    .toPromise().then(response => response)
    .catch(this.handleError);
};

getObservation(id:String): Promise<any> {
  return this.http.get(this.server + "observation/"+id)
    .toPromise().then(response => response)
    .catch(this.handleError);
};

    
  getObservations(): Promise<any> {
    return this.http.get(this.server + "observation?performer.reference=practitioner/magicSystem2020")
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  postObservation(observation: any){
    return this.http.post(this.server + "observation?performer.reference=practitioner/magicSystem2020",observation,{
      headers : {'Content-Type': 'application/json'}
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
