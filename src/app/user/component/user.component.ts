import { User } from './../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
// import { RepositoryService } from "app/commun/service/repository-service";

@Component({
    selector: 'nod-user',
    templateUrl: 'user.component.html'
})
export class UserComponent {


    // filtre = '';

    // detailUser?: User;
    // lastUser?: User;
    // Users: User[];
    // _Users: User[];

    // private _lastSub: ISubscription;

    // constructor(private _repo: RepositoryService,
    //     private route: ActivatedRoute) {

    // }

    // ngOnInit(): void {
    //     this.filtre = this.route.snapshot.queryParams['filter'] || '';

    //     this._repo.getUsers().subscribe(Users => {
    //         this._Users = Users;
    //         this.applyFilter(this.filtre);
    //     });

    // }

    // applyFilter(filtre: string) {
    //     this.filtre = filtre;
    //     this.Users = this._Users.filter(p => !this.filtre || p.lastname.indexOf(this.filtre) >= 0);
    // }

   


    // ngOnDestroy(): void {
    //     this._lastSub.unsubscribe();
    // }
}
