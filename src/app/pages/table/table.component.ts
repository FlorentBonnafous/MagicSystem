import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestService } from '../../services/rest.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public  patients : any;
    public tableData1: TableData;
    public tableData2: TableData;

    constructor(private service: RestService) {
        service.getPatients().then(patients => {
            this.patients = patients;
            console.log(this.patients);
          });
    }
    
    ngOnInit(){
        
    }
}
