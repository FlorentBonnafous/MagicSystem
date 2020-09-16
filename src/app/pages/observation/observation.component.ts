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

  constructor(private service: RestService) { 
    service.getObservations().then(observations => {
      console.log(observations.performer)     
      this.observations = observations;
      console.log(this.observations);
    });

  }

  ngOnInit(): void {
  }

}
