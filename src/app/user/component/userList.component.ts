import { User } from './../../commun/model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../commun/service/user/user.service";
// import { RepositoryService } from "./../../commun/service/repository-service";

@Component({
    selector: 'nod-user-list',
    templateUrl: 'userList.component.html'
})
export class UserListComponent implements  OnInit{

    private users: User[];
    constructor(private _repo: UserService){}
    
    ngOnInit(): void {      
        this._repo.getUsers().subscribe(users => {
            this.users = users;
        });
    }

}
