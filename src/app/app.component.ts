import { Component } from '@angular/core';

@Component({
  selector: 'mbv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  pageTitle: string = 'Mountebank Viewer';
}
