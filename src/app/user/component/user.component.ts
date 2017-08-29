import { User } from './../../commun/model/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'nod-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{
   
    @Input() user: User;
    private us:User;

    ngOnInit(): void {
        this.user;
    }
    
}
