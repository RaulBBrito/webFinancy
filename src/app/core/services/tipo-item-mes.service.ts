import { HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { EMPTY, Observable, Subscription, throwError } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { TipoItemRxService } from './rx/tipoItemRxService';
import { ApiConfiguration } from './api/api-configuration';
import { BaseService } from './base.service';
import { ErrosService } from './erros.service';
import { ICartao, IItensMes, IMensal, ITipoItemMes } from '../interfaces/itipo-item-mes.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class TipoItemMesService extends BaseService {

  constructor(
    public override config: ApiConfiguration,
    private spinner: SpinnerService,
    private tipoItemRxService: TipoItemRxService,
    public snackBar: MatSnackBar,
    private erros: ErrosService,
    private ngZone: NgZone,
    private router: Router,
    private loginService: LoginService
  ) {
    super(config);
   }

   override get apiUrl(): string {
    return `${super.apiUrl}`;
  }

  getTipoItem(): Observable<ITipoItemMes[]>{
    const spinnerSubscription: Subscription = this.spinner.spinner$.subscribe();
    this.tipoItemRxService.onIsLoading.next(true);
    this.validarToken(spinnerSubscription);
    return this.get<ITipoItemMes[]>('/tipoitemmes', null, null, super.getHeadersToken()).pipe(
            tap(() => {
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
          }),
            catchError((error) => {
              this.errorHandle(error);
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
              return throwError(error);
            })
          )
  }

  getListMensal(): Observable<IMensal[]>{
    const spinnerMensalSubscription: Subscription = this.spinner.spinner$.subscribe();
    this.tipoItemRxService.onIsLoading.next(true);
    this.validarToken(spinnerMensalSubscription);
    return this.get<IMensal[]>(`/mensal`, null, null, super.getHeadersToken()).pipe(
            tap(() => {
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerMensalSubscription.unsubscribe());
          }),
            catchError((error) => {
              this.errorHandle(error);
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerMensalSubscription.unsubscribe());
              return throwError(error);
            })
          )
  }

  getMensal(data: string): Observable<IMensal>{
    const spinnerSubscription: Subscription = this.spinner.spinner$.subscribe();
    this.tipoItemRxService.onIsLoading.next(true);
    this.validarToken(spinnerSubscription);
    return this.get<IMensal>(`/mensal/buscar/${data}`, null, null, super.getHeadersToken()).pipe(
            tap(() => {
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
          }),
            catchError((error) => {
              this.errorHandle(error);
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
              return throwError(error);
            })
          )
  }

  getItensMes(): Observable<IItensMes[]>{
    const spinnerSubscription: Subscription = this.spinner.spinner$.subscribe();
    this.tipoItemRxService.onIsLoading.next(true);
    this.validarToken(spinnerSubscription);
    return this.get<IItensMes[]>(`/itensmes`, null, null, super.getHeadersToken()).pipe(
            tap(() => {
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
          }),
            catchError((error) => {
              this.errorHandle(error);
              this.tipoItemRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
              return throwError(error);
            })
          )
  }

  

  errorHandle(error: any): Observable<any> {
    this.showMessage(this.erros.getMensagemErro(error), true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  validarToken(spinnerSubscription: Subscription){
    if(super.isTokenValidado()){
      this.tipoItemRxService.onIsLoading.next(false);
      this.ngZone.run(() => spinnerSubscription.unsubscribe());
      this.loginService.logout();
    }
  }
}
