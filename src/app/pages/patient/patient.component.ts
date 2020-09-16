import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient : any;
  constructor(private activatedRoute: ActivatedRoute, private service: RestService) {
    
    service.getPatient(this.activatedRoute.snapshot.params['id']).then(patient => {
      this.patient = patient;
    });
    
   }

  ngOnInit(): void {
  }

}
