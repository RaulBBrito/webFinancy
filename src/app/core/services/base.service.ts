import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, NgZone, Type } from '@angular/core';
import { ApiConfiguratioInterface, OptionsHttp } from '@app/core/interfaces';
import { LocatorService } from './locator.service';
import { Observable, Subscription } from 'rxjs';
import { map, timeout} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SpinnerService } from './spinner.service';
import { Router } from '@angular/router';

const TOKEN: string = "token";

export interface IHttpHeaders{
  headers: HttpHeaders,
  method: string,
  mode: string
}

@Injectable({
  providedIn: 'root'
})
export class BaseService{
  
  private _apiUrl = "";
  private _loginUrl = "";
  public readonly http!: HttpClient;
  public readonly timeoutRequest: number = 60000;

  constructor (
    @Inject(String) protected config: ApiConfiguratioInterface,
  ){
    this.http = LocatorService.injector.get(HttpClient);
  }

  get apiUrl(): string | undefined {
    return this._apiUrl || this.config?.apiUrl;
  }

  get loginUrl(): string | undefined {
    return this._loginUrl || this.config?.loginUrl;
  }

  public get<M = any, R = M>(
    url: string,
    params?: M | null,
    model?:Type<R> | null,
    optionsHttp?: OptionsHttp | any): Observable<R>{
      return this.http.get<M | R>(this.apiUrl + url, {
        ...optionsHttp,
        params: {
          ...params
        }
      })
        .pipe(
          timeout(this.timeoutRequest)
        ).pipe(
          map(data => this.plainModel<R>(data, model))
        );
    }

    public post<M = any, R = M>(url: string, body?: M, model?: Type<R> | null, optionsHttp?: OptionsHttp|any): Observable<R>{
        return this.http.post<M | R>(this.apiUrl + url, body,optionsHttp)
          .pipe(
            timeout(this.timeoutRequest)
          ).pipe(
            map(data => this.plainModel<R>(data, model))
          );
    }

    public put<M, R>(url: string, body?: M | R, model?: Type<R>, optionsHttp?: OptionsHttp|any): Observable<R>{
      return this.http.put<M | R>(this.apiUrl + url, body, optionsHttp)
        .pipe(
          timeout(this.timeoutRequest)
        ).pipe(
          map(data => this.plainModel<R>(data, model))
        );
    } 

    public delete<M, R>(url: string, body?: M | R, optionsHttp?: OptionsHttp|any): Observable<R>{
      return this.http.request<any>('DELETE', this.apiUrl + url, 
        {
          body
        }
      ).pipe(
        timeout(this.timeoutRequest)
      );
    }

    public plainModel<M>(data: any, model?: Type<M> | null): M{
      return data;
    }

    isTokenValidado(){
      return new JwtHelperService().isTokenExpired(localStorage[TOKEN]);
    }

    getHeadersToken(): IHttpHeaders{
      return {
        headers: new HttpHeaders({
          'Content-Type': '',
          'accept': 'application/json',
          'Authorization': `Bearer ${localStorage[TOKEN]}`
        }),
        method: 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
        mode: 'no-cors'
      }
    }
  

}