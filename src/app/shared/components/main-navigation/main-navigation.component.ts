import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface NavItem {
    name: string;
    path: string;
}

@Component({
    selector: 'lumi-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
    public navItems: NavItem[];
    public subItems: NavItem[];

    constructor(private activeRoute: ActivatedRoute, private router: Router) {
        this.setMainItems();
        this.setSubItems();
    }

    ngOnInit() { }

    private setMainItems() {
        this.navItems = this.router.config
            .filter(route => route.canActivate)
            .map(route => ({name: route.path, path: `/${route.path}`}));
    }

    private setSubItems() {
        const location = this.activeRoute.snapshot.parent.url[0].path;

        this.subItems = this.activeRoute.routeConfig.children
            .filter(child => child.path)
            .map(child => ({name: child.path, path: `/${location}/${child.path}`}));
    }
}
