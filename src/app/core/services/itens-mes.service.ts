import { HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { EMPTY, Observable, Subscription, throwError } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { TipoItemRxService } from './rx/tipoItemRxService';
import { ApiConfiguration } from './api/api-configuration';
import { BaseService } from './base.service';
import { ErrosService } from './erros.service';
import { ICartao, IItemMesC, IItensMes, IMensal, ITipoItemMes } from '../interfaces/itipo-item-mes.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';
import { ItemMesRxService } from './rx/ItemMesRxService';

@Injectable({
  providedIn: 'root'
})
export class ItensMesService extends BaseService {

  constructor(
    public override config: ApiConfiguration,
    private spinner: SpinnerService,
    private itemMesRxService: ItemMesRxService,
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

  cadastrarItemMes(itemMes: IItemMesC): Observable<IItemMesC>{
    const spinnerSubscription: Subscription = this.spinner.spinner$.subscribe();
    this.itemMesRxService.onIsLoading.next(true);
    this.validarToken(spinnerSubscription);
/*
    itemMes = {
      "desc_itens_mes": "Luz",
      "vlr_itens_mes": "186.85",
      "data_venc_itens_mes": "2022-06-30",
      "data_pag_itens_mes": "2022-06-25",
      "id_tipo_item_mes": "2",
      "id_recurso_itens": "1",
      "id_cartao": "1",
      "id_mensal": "5",
      "status_pag_itens_mes": "S"
    }*/
    return this.post<any, IItemMesC>('/itensmes/create', itemMes, null, super.getHeadersToken()).pipe(
            tap((response) => {
              if(response.error){
                this.errorHandle({status: response.error});
              }
              this.itemMesRxService.onIsLoading.next(false);
              this.ngZone.run(() => spinnerSubscription.unsubscribe());
          }),
            catchError((error) => {
              this.errorHandle(error);
              this.itemMesRxService.onIsLoading.next(false);
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
      this.itemMesRxService.onIsLoading.next(false);
      this.ngZone.run(() => spinnerSubscription.unsubscribe());
      this.loginService.logout();
    }
  }
}
