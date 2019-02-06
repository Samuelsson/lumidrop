import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SettingsComponent } from './settings.component';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        SharedModule
    ],
    declarations: [
        SettingsComponent,
        GeneralComponent,
        SecurityComponent
    ]
})
export class SettingsModule {
}
