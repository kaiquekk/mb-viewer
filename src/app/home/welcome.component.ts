import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.sass']
})

export class WelcomeComponent {
    public pageTitle: string = 'Welcome to Mountebank Viewer';
}
