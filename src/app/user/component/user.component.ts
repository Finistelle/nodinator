import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
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
    private newUser: User;
    private userList: User[];
    private roleList: String[];

    constructor(private _repo: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.newUser = new User();
        this.userList = [];
        this.roleList = ['Client' , 'Visiteur' , 'Administrateur'];
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.userId = params['id'];
        });

    }

    save(form: NgForm): boolean {
        let isSave = false;
        if (form.valid) {
            this._repo.addUser(this.newUser).subscribe((user: User) =>{
                this.userList.push(user);
            },(err: Response)=>{
                console.log("statut de l'erreur: "+err.status +" "+"erreur:"+err);
            })
        }
        return;
    }
}
