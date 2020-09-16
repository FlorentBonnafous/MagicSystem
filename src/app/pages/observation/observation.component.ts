import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  public  observations : any;
  public  patients : any;
  public date : any;
  public heure: any;

  constructor(private service: RestService) { 
    service.getObservations().then(observations => {   
      this.observations = observations;
      console.log(observations);
      for (let observation of observations) {
        let str = observation.subject.reference;
        let idPatient = str.split("/");
        service.getPatient(idPatient[1]).then(patient => {
            observation.patient = patient;
        })
    }
});
}

  ngOnInit(): void {
  }

}
