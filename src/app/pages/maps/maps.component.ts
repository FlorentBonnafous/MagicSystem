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
            let x = {
            "resourceType" : "Observation",
            "status" : "<code>",
            "category": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                      "code": "vital-signs",
                      "display": "Vital Signs"
                    }
                  ],
                  "text": "Vital Signs"
                }
              ],
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "9279-1",
                    "display": TypeOBS
                  }
                ],
                "text": textObs
              },
              "subject": {
                "reference": "Patient/IDduPatient"
              },
              "effectiveDateTime": dateObs,
              "valueQuantity": {
                "value": nbBattement,
                "unit": "breaths/minute",
                "system": "http://unitsofmeasure.org",
                "code": "/min"
              }            
        };
    }
}