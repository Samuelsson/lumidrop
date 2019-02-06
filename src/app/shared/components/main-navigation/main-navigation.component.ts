import { Component, OnInit } from '@angular/core';

interface NavItem {
    name: String;
    path: String;
    icon: String;
    children?: NavItem[];
}

@Component({
    selector: 'lumi-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
    navSections: any[];

    constructor() {
        // It's possible to build this dynamically by importing Router.config but that way we can't get child routes for
        // lazy loaded modules. And by building it manually we actually have more control :)
        this.navSections = [
            {
                name: 'Home',
                navItems: [
                    { name: 'Dashboard', path: '/home/dashboard', icon: '' }
                ]
            },
            {
                name: 'Settings',
                navItems: [
                    { name: 'General', path: '/settings/general', icon: '' },
                    { name: 'Security', path: '/settings/security', icon: '' }
                ]
            }
        ];
    }

    ngOnInit() {
    }
}
