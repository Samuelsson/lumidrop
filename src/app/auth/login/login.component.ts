import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService, TokenPayload } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'lumi-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        if (this.loginForm.valid) {
            const user: TokenPayload = this.loginForm.value;

            this.authService.login(user)
                .subscribe(
                    (res) => {
                        this.router.navigateByUrl('/');
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }

}
