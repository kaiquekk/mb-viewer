import { Component} from '@angular/core';
import { ImposterService } from './imposter.service';
import { IImposter } from './imposter';

@Component({
  selector: 'mbv-imposter-list',
  templateUrl: './imposter-list.component.html',
  styleUrls: ['./imposter-list.component.sass']
})
export class ImposterListComponent {   
  imposters: string[];
  _port = '';
  errorMessage = '';
  showPostForm = false;
  newImposter: IImposter = {
    port: 0,
    protocol: '',
    stubs: []
  }; 

  get port(): string {
    return this._port;
  }

  set port(value: string) {
    this._port = value;
  }

  constructor(private imposterService: ImposterService) { }

  searchImposters(port: string): void {
    this.imposterService.getImposters(+port).subscribe({
      next: imposters => this.imposters = imposters['imposters'],
      error: err => this.errorMessage = err
    });
  }

  togglePostForm(): void {
    if (this._port) {
      this.showPostForm = !this.showPostForm;
    }
  }

  parse(value: string): any {
    return JSON.parse(value);
  }

  postImposter(): void {
    this.imposterService.postImposter(+this.port, this.newImposter).subscribe({
      next: msg => {
        this.togglePostForm();
        this.searchImposters(this.port)
      },
      error: err => this.errorMessage = err
    })
  }

}
