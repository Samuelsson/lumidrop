import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            { path: 'general', component: GeneralComponent },
            { path: 'security', component: SecurityComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
