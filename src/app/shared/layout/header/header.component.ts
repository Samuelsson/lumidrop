import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails } from '../../../auth/auth.service';

@Component({
    selector: 'lumi-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userFullName: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        const userDetails: UserDetails = this.authService.getUserDetails();
        this.userFullName = userDetails.name;
    }
}
