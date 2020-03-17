import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImposterService } from './imposter.service';

@Component({
  selector: 'mbv-imposter-detail',
  templateUrl: './imposter-detail.component.html',
  styleUrls: ['./imposter-detail.component.sass']
})
export class ImposterDetailComponent implements OnInit {
  errorMessage = '';
  imposter: Object | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imposterService: ImposterService) {
  }

  ngOnInit(): void {
    const param1 = this.route.snapshot.paramMap.get('port');
    const param2 = this.route.snapshot.paramMap.get('mbPort');
    if (param1 && param2) {
      const port = +param1,
            mbPort = +param2;
      this.getImposter(mbPort, port);
    }
  }

  getImposter(mbPort: number, port: number) {
    //this.imposterService.getImposter(mbPort, port).subscribe({
    this.imposterService.getImposters(mbPort).subscribe({
      next: imposter => this.imposter = imposter,
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/imposters']);
  }
}
