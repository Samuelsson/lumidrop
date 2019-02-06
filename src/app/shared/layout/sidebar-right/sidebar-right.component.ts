import { Component, OnInit } from '@angular/core';
import { SidebarRightService } from './sidebar-right.service';

@Component({
    selector: 'lumi-sidebar-right',
    templateUrl: './sidebar-right.component.html',
    styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {
    constructor(private sidebarRightService: SidebarRightService) { }

    ngOnInit() {
    }

    get sidebarVisible(): boolean {
        return this.sidebarRightService.sidebarVisible;
    }

}
