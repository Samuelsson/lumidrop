import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface NavItem {
    name: string;
    path: string;
    subItems?: NavItem[];
}

@Component({
    selector: 'lumi-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
    navItems: NavItem[];
    subItems: NavItem[];

    constructor(private activeRoute: ActivatedRoute) {
        this.navItems = [
            {
                name: 'home',
                path: '/home'
            },
            {
                name: 'settings',
                path: '/settings'
            }
        ];
    }

    ngOnInit() {
        this.setSubItems();
    }

    setSubItems() {
        const location = this.activeRoute.snapshot.parent.url[0].path;

        this.subItems = this.activeRoute.routeConfig.children
            .filter(child => child.path)
            .map(child => ({name: child.path, path: `/${location}/${child.path}`}));
    }
}
