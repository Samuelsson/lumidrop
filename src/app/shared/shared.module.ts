import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { SidebarLeftComponent } from './layout/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './layout/sidebar-right/sidebar-right.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { DefaultViewComponent } from './pages/default-view/default-view.component';

// To get some structure in this always-growing sharedModule, an array of each type is set up.
// We can then use the handy array spread under NgModule so we don't have a lot of duplicates.
const layoutComponents: Array<any> = [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ...layoutComponents,
        PageNotFoundComponent,
        MainNavigationComponent,
        DefaultViewComponent
    ],
    exports: [
        ...layoutComponents,
        DefaultViewComponent
    ]
})
export class SharedModule { }
