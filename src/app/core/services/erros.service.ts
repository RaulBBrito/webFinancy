import { Injectable } from '@angular/core';
import { ErrorApiModel } from '@app/core';
import { HttpStatusCode } from '../enums/http-status-code.enum';


@Injectable({
  providedIn: 'root'
})
export class ErrosService {

  error = {
    401: "Usuário ou senha inválidos!",
    403: "Token expirado!",
    404: "A Pagina solicitada não está disponível",
    409: "Dados enviados não compatível",
    0: "Erro na chamada do serviço!"
  }

  constructor(){}

  getMensagemErro(erro?: ErrorApiModel): string {
    switch(erro?.status) {
      case HttpStatusCode.UNAUTHORIZED: return this.error[401];
      case HttpStatusCode.FORBIDDEN: return this.error[403];
      case HttpStatusCode.NOT_FOUND: return this.error[404];
      case HttpStatusCode.CONFLICT: return this.error[409];
      default: return this.error[0];
    }
  }
}