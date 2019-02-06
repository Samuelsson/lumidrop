import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule { }
