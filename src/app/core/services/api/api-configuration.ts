import { Injectable } from '@angular/core';
import { ApiConfiguratioInterface } from '@app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiConfiguration implements ApiConfiguratioInterface{
  apiUrl: string = '[api-url]';
  loginUrl: string = '[login-url]'
}