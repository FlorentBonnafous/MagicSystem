import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'upgrade-cmp',
    moduleId: module.id,
    templateUrl: 'upgrade.component.html'
})

export class UpgradeComponent implements OnInit{

    public appointment : any;

    constructor(private service: RestService) {
        service.getAppointment("magicSystem2020").then(appointment => {
            this.appointment = appointment;
            console.log(this.appointment);
          });
    }

    ngOnInit(){
    }
}
