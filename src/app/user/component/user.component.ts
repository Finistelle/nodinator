import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from './../../commun/model/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './../../commun/service/user/user.service';

@Component({
    selector: 'nod-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

    private user: User;
    private userId: number;

    constructor(private _repo: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.userId = params['id'];
        });

        this._repo.getUsers().subscribe((users: User[]) => {
            users.forEach((user: User) => {
                if (user.id === this.userId) {
                    this.user = user;
                }
            });
        });
    }
}
