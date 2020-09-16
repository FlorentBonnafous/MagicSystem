import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.css']
})
export class AddObservationComponent implements OnInit {
  patient : any;
  
  constructor(private activatedRoute: ActivatedRoute, private service: RestService) {
    
    service.getPatient(this.activatedRoute.snapshot.params['id']).then(patient => {
      this.patient = patient;
      console.log(this.patient);
    });
    
   }

   ngOnInit() :void{
  }

  onSubmit(form: NgForm) {
      //console.log(form);
      let TypeOBS = form.value.TypeOBS;
      let dateObs = form.value.dateObs;
      let nbBattement = parseInt(form.value.nbBattement);
      let textObs = form.value.textObs;

      //création du json
      let observation = {
        "resourceType": "Observation",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/StructureDefinition/vitalsigns"
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: respiratory-rate</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Respiratory rate <span>(Details : {LOINC code '9279-1' = 'Respiratory rate', given as 'Respiratory rate'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 26 breaths/minute<span> (Details: UCUM code /min = '/min')</span></p></div>"
        },
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "vital-signs",
                "display": "Vital Signs"
              }
            ],
            "text": form.value.textObs
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "9279-1",
              "display": form.value.TypeOBS
            }
          ],
          "text": form.value.TypeOBS
        },
        "subject": {
          "reference": "Patient/"+this.activatedRoute.snapshot.params['id']
        },
        "effectiveDateTime": form.value.dateObs,
        "valueQuantity": {
          "value": parseInt(form.value.nbBattement),
          "unit": "breaths/minute",
          "system": "http://unitsofmeasure.org",
          "code": "/min"
        }
      };

      
  this.service.postObservation(observation).then(result =>{
    console.log(result);
  })
}

}
