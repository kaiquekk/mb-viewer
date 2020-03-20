import { Component } from '@angular/core';
import { LogsService } from './logs.service';

@Component({
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.sass']
})
export class LogsComponent {
  logs: Object = {};
  showLogs: boolean = false;
  port = '';
  errorMessage: string = '';
  
  constructor(private logsService: LogsService) { }

  getLogs(port: string): void {
    this.showLogs = true;
    this.logsService.getLogs(+port).subscribe({
      next: logs => this.logs = logs,
      error: err => this.errorMessage = err
    });
  }
}
