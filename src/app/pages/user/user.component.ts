import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    public users : any;


    constructor(private service: RestService) {
        service.getUsers("magicSystem2020").then(users => {
            this.users = users;
          });
    }
    ngOnInit(){
    }
}
