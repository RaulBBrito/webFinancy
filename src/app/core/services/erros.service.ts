import { Config } from './../../../environments/Config/typeconfig';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario, Login, ErrorApiModel } from '@app/core';
import { ApiConfiguration } from '@app/core/services/api/api-configuration';
import { BaseService } from '@app/core/services/base.service';
import { LoginRxService } from '@app/core/services/rx/loginRxService';
import { Observable, of } from 'rxjs';
import { HttpStatusCode } from '../enums/http-status-code.enum';


@Injectable({
  providedIn: 'root'
})
export class ErrosService {

  error = {
    404: "A Pagina solicitada não está disponível",
    0: "Erro na chamada do serviço!"
  }

  constructor(){}

  getMensagemErro(erro?: ErrorApiModel): string {
    switch(erro?.status) {
      case HttpStatusCode.NOT_FOUND: return this.error[404];
      default: return this.error[0];
    }
  }
}