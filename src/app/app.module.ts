import { Config,  } from './../environments/Config/typeconfig';
import { ApiConfiguration } from './core/services/api/api-configuration';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LocatorService } from './core/services';
import Configs from './envconfig/Configs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private injector: Injector,
    private apiConfiguration: ApiConfiguration){
      LocatorService.injector = this.injector;
      this.apiConfiguration.apiUrl = Configs.backend.api;
      this.apiConfiguration.loginUrl = Configs.backend.login;
  }
}
