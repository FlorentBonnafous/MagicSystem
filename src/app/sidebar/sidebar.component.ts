import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Accueil',           icon:'nc-bank',       class: '' },
<<<<<<< Updated upstream
    { path: '/maps',          title: 'Diagnostic',        icon:'nc-paper',      class: '' },
    { path: '/upgrade', title: 'RDV',               icon:'nc-calendar-60',class: '' },
=======
    { path: '/maps',          title: 'Observations',        icon:'nc-paper',      class: '' },
    { path: '/notifications', title: 'RDV',               icon:'nc-calendar-60',class: '' },
>>>>>>> Stashed changes
    { path: '/user', title: 'Mon Profil',        icon:'nc-single-02',class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
