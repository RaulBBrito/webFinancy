import { Injectable } from '@angular/core';
import { Usuario, Login } from '@app/core';
import { Observable, of } from 'rxjs';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }
  logout(){
    delete localStorage[LS_CHAVE]; 
  }

  login(login: Login): Observable<Usuario | null>{
    let usu = new Usuario(1, "Raul Brito", login.email, login.password, "FUNC");

    if(login.email == login.password){
      if(login.email == "admin"){
        usu = new Usuario(1, "Raul ADMIN", login.email, login.password, "ADMIN");
      }
      else if(login.email == "gerente"){
        usu = new Usuario(1, "Raul GERENTE", login.email, login.password, "GERENTE");
      }
      return of(usu);
    }else{
      return of(usu);
    }
  }
}
