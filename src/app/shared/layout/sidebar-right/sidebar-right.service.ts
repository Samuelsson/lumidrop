import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class SidebarRightService {
    sidebarVisible: boolean;
    sidebarVisibilityChange$: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.sidebarVisible = false;
        this.sidebarVisibilityChange$.subscribe((value) => {
            this.sidebarVisible = value;
        });
    }

    toggleSidebarVisibility() {
        this.sidebarVisibilityChange$.next(!this.sidebarVisible);
    }
}
