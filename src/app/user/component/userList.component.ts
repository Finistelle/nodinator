
import { User } from './../../commun/model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "./../../commun/service/user/user.service";

@Component({
    selector: 'nod-user-list',
    templateUrl: 'userList.component.html'
})
export class UserListComponent implements OnInit {

    private users: User[];
    private selectedUser: User;
    constructor(private _repo: UserService, private router: Router) { }

    ngOnInit(): void {
        this._repo.getUsers().subscribe((users: User[]) => {
            this.users = users;
        });
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }

    gotoDetail(): void {
        this.router.navigate(['user/detail', this.selectedUser.id]);
    }

}
