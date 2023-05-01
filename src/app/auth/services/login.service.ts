import { HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario, Login } from '@app/core';
import { ApiConfiguration } from '@app/core/services/api/api-configuration';
import { BaseService } from '@app/core/services/base.service';
import { ErrosService } from '@app/core/services/erros.service';
import { LoginRxService } from '@app/core/services/rx/loginRxService';
import { SpinnerService } from '@app/core/services/spinner.service';
import { EMPTY, Observable, of, throwError, Subscription } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': '',
      'accept': 'application/json',
      'Authorization': 'Beare '
    }),
    method: 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
    mode: 'no-cors'
  }

  constructor(
    public override config: ApiConfiguration,
    public loginRxService: LoginRxService,
    public snackBar: MatSnackBar,
    private erros: ErrosService,
    private spinner: SpinnerService,
    private ngZone: NgZone
  ) {
    super(config);
  }

  override get apiUrl(): string {
    return `${super.loginUrl}`;
  }

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

  login_old(login: Login): Observable<Usuario | null>{
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

  cadastrar(usuario: Usuario): Observable<Usuario | null>{
    //return this.efetuarLogin();
    let usu = new Usuario(null, usuario.nome, usuario.email, usuario.senha, "ADMIN");
    return of(usu);
  }

  login(login: Login): Observable<any>{
    const spinnerSubscription: Subscription = this.spinner.spinner$.subscribe();
    this.loginRxService.onIsLoading.next(true);
    let usuario: any ={
      username: login.email,
      password: login.password      
    };
    return this.post<any, any>(`/login`, usuario, null, this.httpOption)
          .pipe(
            tap((user) => {
            this.loginRxService.onIsLoading.next(false);
              //this.ngZone.run(() => spinnerSubscription.unsubscribe());
          }),
            catchError((error) => {
              this.errorHandle(error);
              this.loginRxService.onIsLoading.next(false);
              //this.ngZone.run(() => spinnerSubscription.unsubscribe());
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

}
