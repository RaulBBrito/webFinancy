import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@app/core';
import { LoginService } from '@app/auth/services/login.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  usuarioSessao: any;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }
    get usuarioLogado(): Usuario | null {
      return this.usuarioSessao = this.loginService.usuarioLogado;
    }

    logout(){
      this.loginService.logout();
      this.router.navigate(['/login']);
    }

    ngOnInit(): void {
      
    }

}
