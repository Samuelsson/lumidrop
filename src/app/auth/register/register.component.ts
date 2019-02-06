import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, TokenPayload } from '../auth.service';

@Component({
    selector: 'lumi-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            contactInformation: this.fb.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required]
            })
        });
    }

    register() {
        if (this.registerForm.valid) {
            const user: TokenPayload = this.registerForm.value;

            this.authService.register(user)
                .subscribe(
                    (res) => {
                        console.log('User registered: ', res);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }

}
