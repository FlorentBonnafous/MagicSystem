import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private service: RestService) { 
    
  }

  ngOnInit(): void {
  }

}
