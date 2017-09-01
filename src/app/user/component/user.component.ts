import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './../../commun/model/user.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from './../../commun/service/user/user.service';

@Component({
    selector: 'nod-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

    private userId: number;
    private newUser: User;
    private userList: User[];
    private roleList: String[];

    constructor(private _repo: UserService,
        private activatedRoute: ActivatedRoute,
        public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.newUser = new User();
        this.userList = [];
        this.roleList = ['Client', 'Visiteur', 'Administrateur'];
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.userId = params['id'];
        });

    }

    save(form: NgForm): boolean {
        let isSave = false;
        if (form.valid) {
            this._repo.createAccount(this.newUser).subscribe((user: User) => {
                this.userList.push(user);
                isSave = true;
            }, (err: Response) => {
                this.toastr.error("statut de l'erreur: " + err.status + " " + "erreur:" + err);
            })
        }
        return isSave;
    }
}
