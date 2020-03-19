import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImposterService } from './imposter.service';
import { IImposter } from './imposter';

@Component({
  selector: 'mbv-imposter-detail',
  templateUrl: './imposter-detail.component.html',
  styleUrls: ['./imposter-detail.component.sass']
})
export class ImposterDetailComponent implements OnInit {
  errorMessage = '';
  imposter: IImposter | undefined;
  mbPort: number;
  port: number; 
  edit: boolean = false;
  add: boolean = false;
  objectKeys = Object.keys;
  imposterCopy: IImposter;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imposterService: ImposterService) {
  }

  ngOnInit(): void {
    const param1 = this.route.snapshot.paramMap.get('port');
    const param2 = this.route.snapshot.paramMap.get('mbPort');
    if (param1 && param2) {
      this.port = +param1;
      this.mbPort = +param2;
      this.getImposter(this.mbPort, this.port);
    }
  }

  getImposter(mbPort: number, port: number) {
    this.imposterService.getImposter(mbPort, port).subscribe({
      next: imposter => {this.imposter = imposter; this.imposterCopy = Object.assign({}, this.imposter);},
      error: err => this.errorMessage = err
    })
  }

  deleteImposter() {
    this.imposterService.deleteImposter(this.mbPort, this. port).subscribe({
      next: msg => this.onBack(),
      error: err => this.errorMessage = err
    })
  }

  putStubs() {
    this.imposterService.putStubs(this.mbPort, this.port, {stubs: this.imposterCopy.stubs}).subscribe({
      next: msg => this.cancelEdit(),
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/imposters']);
  }

  parse(value: string): any {
    if (value) {
      return JSON.parse(value);
    }
  }

  cancelEdit(): void {
    this.toggleEdit();
    this.imposterCopy = Object.assign({}, this.imposter);
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  toggleAdd(): void {
    this.add = !this.add;
  }

  deleteStub(index: number) {
    this.imposterService.deleteStub(this.mbPort, this.port, index).subscribe({
      next: msg => {        
        this.getImposter(this.mbPort, this.port);
        this.imposterCopy = Object.assign({}, this.imposter);
      },
      error: err => this.errorMessage = err
    })
  }

  postStub(resp: Object, pred?: Object, index?: number) {
    const stub = {
      stub:{
        responses: [resp]
      }
    }
    if (pred) {
      stub.stub['predicates'] = [pred]
    }
    if (index) {
      stub['index'] = +index
    }
    this.imposterService.postStub(this.mbPort, this.port, stub).subscribe({
      next: msg => {        
        this.toggleAdd()
        this.getImposter(this.mbPort, this.port);
        this.imposterCopy = Object.assign({}, this.imposter);
      },
      error: err => this.errorMessage = err      
    })
  }
}
