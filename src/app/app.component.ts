import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  patients : any;
  constructor(private service: RestService) {
    service.getPatient().then(patients => {
      this.patients = patients;
      console.log(this.patients);
    });
  }
}
