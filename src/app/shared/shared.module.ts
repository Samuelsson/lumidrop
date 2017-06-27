import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        TopbarComponent,
        NavbarComponent,
        SidebarRightComponent
    ],
    declarations: [
        TopbarComponent,
        NavbarComponent,
        SidebarRightComponent
    ]
})
export class SharedModule {
}
