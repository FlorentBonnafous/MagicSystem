import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'upgrade-cmp',
    moduleId: module.id,
    templateUrl: 'upgrade.component.html'
})

export class UpgradeComponent implements OnInit {

    public appointments: any;
    public date : any;
    public heure: any;

    constructor(private service: RestService) {
        service.getAppointments("magicSystem2020").then(appointments => {
            this.appointments = appointments;
            for (let appointment of appointments) {
                let str = appointment.participant[1].actor.reference;
                let idPatient = str.split("/");
                let start = appointment.start;
                let reelDate = start.split("T");
                this.date = reelDate[0];
                this.heure = reelDate[1];
                service.getPatient(idPatient[1]).then(patient => {
                    appointment.patient = patient;
                })
            }
            console.log(appointments);
        });
    }

    ngOnInit() {
    }
}
