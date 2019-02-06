import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails } from '../../../auth/auth.service';
import { SidebarRightService } from '../sidebar-right/sidebar-right.service';

@Component({
    selector: 'lumi-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userFullName: string;

    constructor(private authService: AuthService, private sidebarRightService: SidebarRightService) { }

    ngOnInit() {
        const userDetails: UserDetails = this.authService.getUserDetails();
        this.userFullName = userDetails.name;
    }

    toggleSidebarRight() {
        this.sidebarRightService.toggleSidebarVisibility();
    }

    get sidebarRightIconClass() {
        return this.sidebarRightService.sidebarVisible ? 'fa-indent' : 'fa-outdent';
    }
}
