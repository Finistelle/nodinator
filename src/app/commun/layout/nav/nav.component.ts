import { AuthService } from './../../service/auth.service';

import { TabComponent } from './tab/tab.component';
import { Component, OnDestroy, SimpleChanges, OnInit } from '@angular/core';

@Component({
    selector: 'nod-nav',
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit, OnDestroy {



    private selectedTab: TabComponent;
    private isAuthenticated: boolean;

    constructor(private _auth: AuthService) { }

    onSelect(tab: TabComponent): void {
        this.selectedTab.isActive = true;
    }

    ngOnInit(): void {
        this.isAuthenticated = this._auth.$isAuthenticated;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isAuthenticated = this._auth.$isAuthenticated;
        alert('test');
    }

    ngOnDestroy(): void {
    }

    public get $isAuthenticated(): boolean {
        return this.isAuthenticated;
    }

    public set $isAuthenticated(value: boolean) {
        this.isAuthenticated = value;
    }

}
