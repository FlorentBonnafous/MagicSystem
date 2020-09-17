import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'app/services/rest.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.css']
})
export class AddObservationComponent implements OnInit {
  patient : any;
  
  constructor(private toastr: ToastrService,private activatedRoute: ActivatedRoute, private service: RestService, private router: Router) {
    
    service.getPatient(this.activatedRoute.snapshot.params['id']).then(patient => {
      this.patient = patient;
      console.log(this.patient);
    });
    
   }

   ngOnInit() :void{
  }

  onSubmit(form: NgForm) {
      //création du json
      let observation = {
        "resourceType": "Observation",
        "performer":[
          {
            
              "reference" : "practitioner/magicSystem2020"
           
          }
        ],
        "meta": {
          "profile": [
            "http://hl7.org/fhir/StructureDefinition/vitalsigns"
          ]
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
     // console.log(form.value.textObs)

  this.service.postObservation(observation).then(result =>{
    this.toastr.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Bienvenue chez <b>Magic System</b> - Le patient a été informé de vos observations.</span>',
      "",
      {
        timeOut: 10000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon"
      }
    );
    this.router.navigateByUrl('/observation');
  })  

}

}
