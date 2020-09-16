import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-info-rdv',
  templateUrl: './info-rdv.component.html',
  styleUrls: ['./info-rdv.component.css']
})
export class InfoRDVComponent implements OnInit {

  public appointment: any;
  public date : any;
  public heure: any;

  constructor(private activatedRoute: ActivatedRoute,private service: RestService) {
      service.getAppointment(this.activatedRoute.snapshot.params['id']).then(appointment => {
          this.appointment = appointment;
          let str = appointment.participant[0].actor.reference;
          let idPatient = str.split("/");
          let start = appointment.start;
          let reelDate = start.split("T");
          this.date = reelDate[0];
          this.heure = reelDate[1];
          service.getPatient(idPatient[1]).then(patient => {
              appointment.patient = patient;
          })   
      });
  }
  ngOnInit(): void {
  }

}
