import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AuthGuardService } from './auth/auth-guard.service';

import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

// When using "loadChildren" the page is lazy loaded, when using "component" it is not 🤓
const routes: Routes = [
    { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuardService] },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsModule', canActivate: [AuthGuardService] },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        SharedModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
