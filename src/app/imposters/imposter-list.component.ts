import { Component, OnInit } from '@angular/core';
import { ImposterService } from './imposter.service';

@Component({
  selector: 'mbv-imposter-list',
  templateUrl: './imposter-list.component.html',
  styleUrls: ['./imposter-list.component.sass']
})
export class ImposterListComponent implements OnInit {    
  imposters: string[] = [];
  _port = '';
  errorMessage = '';

  constructor(private imposterService: ImposterService) { }

  searchImposters(port: string): void {
    this.imposterService.getImposters(+port).subscribe({
      next: imposters => {
        this.imposters = imposters['imposters'];
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void {
  }

}
