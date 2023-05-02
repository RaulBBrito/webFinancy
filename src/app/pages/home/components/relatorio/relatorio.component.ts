import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    logout(){
      this.loginService.logout();
      this.router.navigate(['/login']);
      location.reload();
    }

    ngOnInit(): void {
      this.usuarioSessao = this.loginService.getUsuarioLogado();
    }

}
