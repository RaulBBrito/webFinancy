import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';
import { IResumo } from '@app/core/interfaces';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  usuarioSessao: any;

  resumoRendas: IResumo = {}
  resumoDespesas: IResumo = {}

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
      this.popularResumo();
      this.usuarioSessao = this.loginService.getUsuarioLogado();
      if(this.usuarioSessao == null){
        this.logout();
      }
    }

    popularResumo(){
      this.resumoRendas = {
        efetuadoRecebido: {descricao:'Rendas recebidas', valor: 'R$ 748,00'},
        aguardando: {descricao:'Aguardando recebimento', valor: 'R$ 1930,00'},
        valorTotal: {descricao:'Valor total da renda', valor: 'R$ 2.678,00'},
      }

      this.resumoDespesas = {
        efetuadoRecebido: {descricao:'Pagamento efetuado', valor: 'R$ 280,27'},
        aguardando: {descricao:'Aguardando pagamento', valor: 'R$ 746,65'},
        valorTotal: {descricao:'Valor total das despesas', valor: 'R$ 1.026,92'},
      }
    }
}
