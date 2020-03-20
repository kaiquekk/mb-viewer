import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { LogsComponent } from './logs/logs.component';
import { ConfigComponent } from './config/config.component';
import { ImposterModule } from './imposters/imposter.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LogsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'config', component: ConfigComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ImposterModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
