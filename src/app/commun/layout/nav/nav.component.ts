import { AuthService } from './../../service/auth-gard-service';
import { TabComponent } from './tab/tab.component';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'nod-nav',
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit, OnDestroy {

    private active: boolean;
    private selectedTab: TabComponent;
    private listTab: TabComponent[];


    private isAuthenticated: boolean;


    constructor(private _auth : AuthService){}

    onSelect(tab: TabComponent): void {
        this.selectedTab.isActive = true;
    }

    ngOnInit(): void {
        this.isAuthenticated =this._auth.$isAuthenticated;
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
