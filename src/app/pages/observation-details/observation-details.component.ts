import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {

  public observation: any;

  constructor(private activatedRoute: ActivatedRoute,private service: RestService) {
    
}

  ngOnInit(): void {
    this.service.getObservation(this.activatedRoute.snapshot.params['id']).then(observation => {
      this.observation = observation;
      console.log("caca", this.observation);
      console.log("caca2", observation.category[0].text);
      let str = observation.subject.reference;
      let idPatient = str.split("/");
      this.service.getPatient(idPatient[1]).then(patient => {
        observation.patient = patient;
        console.log("caca3", this.observation);
      })   
  });
  }

}
