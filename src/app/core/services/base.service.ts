import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Type } from '@angular/core';
import { ApiConfiguratioInterface, OptionsHttp } from '@app/core/interfaces';
import { LocatorService } from './locator.service';
import { Observable } from 'rxjs';
import { map, timeout} from 'rxjs/operators';
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
    params?: M,
    model?:Type<R>,
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
  

}