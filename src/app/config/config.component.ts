import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass']
})
export class ConfigComponent {
  configs: Object;
  showConfig: boolean = false;
  port = '';
  errorMessage: string = '';
  
  toggleConfig(): void {
    this.showConfig = !this.showConfig;
  }
  
  constructor(private configService: ConfigService) { }

  getConfig(port: string): void {
    this.toggleConfig();
    this.configService.getConfig(+port).subscribe({
      next: config => this.configs = config,
      error: err => this.errorMessage = err
    });
  }
}
