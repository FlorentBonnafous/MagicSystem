import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var google: any;

@Component({
    moduleId: module.id
})

export class MapsComponent implements OnInit {
    ngOnInit() {
        }

        onSubmit(form: NgForm) {
            console.log(form);
            let nomPatient = form.value.NomPatient;
            let TypeOBS = form.value.TypeOBS;
            let dateObs = form.value.dateObs;
            let nbBattement = form.value.nbBattement;
            let textObs = form.value.textObs;
            //création du json
        }
    }

