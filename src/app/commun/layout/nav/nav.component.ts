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

    onSelect(tab: TabComponent): void {
        this.selectedTab.isActive = true;
    }

    ngOnInit(): void {
        //   this.listTab =  [{name:"Accueil", isActive: false, $isActive: false, $name:"Accueil"},{name: "Utilisateur", isActive: false, $isActive: false, $name:"Accueil"}, {name: "Articles", isActive: false, $isActive: false, $name:"Accueil"}];
    }

    ngOnDestroy(): void {
        // this.listTab = [];
    }

}
