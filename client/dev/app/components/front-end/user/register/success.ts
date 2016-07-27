import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
    template:`
        <div class="container mg-top-50">
            <h1>Register Success, Welcome {{username}}</h1>
            <button (click)="returnHome()">Home</button>
        </div>
    `
})

export class RegisterSuccessComponent {
    username: string;
    constructor (private router:Router){
        this.username = localStorage.getItem('username');
    }

    returnHome():void {
        this.router.navigateByUrl('/');
    }
}