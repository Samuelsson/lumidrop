import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';

interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    username: string;
    password: string;
    contactInformation?: object;
}

export interface UserDetails {
    id: string;
    roles: string[];
    name: string;
    exp: number;
    iat: number;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl: string;
    private token: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    // Save JWT token to local storage
    private saveToken(token): void {
        localStorage.setItem('lumi-token', token);
        this.token = token;
    }

    // Fetch the JWT token from local storage
    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('lumi-token');
        }
        return this.token;
    }

    private request(method: 'post'|'get', type: 'login'|'register', payload?): Observable<any> {
        let base;
        const url = `${this.apiUrl}/auth/${type}`;

        if (method === 'post') {
            base = this.http.post(url, payload);
        } else {
            base = this.http.get(url, { headers: { Authorization: `Bearer ${this.getToken()}` }});
        }

        // If response contains a token we save it to local storage
        return base.pipe(
            map((res: TokenResponse) => {
                if (res.token) {
                    this.saveToken(res.token);
                }
                return res;
            })
        );
    }

    public login(user: TokenPayload): Observable<any> {
        return this.request('post', 'login', user);
    }

    public register(user: TokenPayload): Observable<any> {
        return this.request('post', 'register', user);
    }

    // Get the user details from the JWT
    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }

    // Simple check if the user is logged in or not. By checking if there is a valid (not expired) token
    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }
}
