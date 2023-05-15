import { TiposComumCartao } from './../../../../core/interfaces/home.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';
import { IResumo, Card } from '@app/core/interfaces';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  usuarioSessao: any;
  resumoRendas: IResumo = {}
  resumoDespesas: IResumo = {}
  rendas: Card;
  despesas: Card;

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

      this.rendas = {
        tiposComum: [
          {dia: "15", mes:"Jun", tipocard:"R", descricao: "Salário quizenal",statusPagamento: true,descricaoStatus: "recebido em 15/Jun",valor: "+ R$ 748,00"},
          {dia: "30", mes:"Jun", tipocard:"R", descricao: "Sálario mensal",statusPagamento: false,descricaoStatus: "aguardando recebimendo",valor: "+ R$ 650,00"},
          {dia: "15", mes:"Jun", tipocard:"R", descricao: "Extra Montreal",statusPagamento: false,descricaoStatus: "aguardando recebimento",valor: "+ R$ 500,00"},
          {dia: "30", mes:"Jun", tipocard:"R", descricao: "Primeira parcela 13° Sálario",statusPagamento: false,descricaoStatus: "aguardando recebimento",valor: "+ R$ 780,00"},
          {dia: "30", mes:"Jun", tipocard:"R", descricao: "Primeira parcela 13° Sálario",statusPagamento: true,descricaoStatus: "pago em 30/Jun",valor: "+ R$ 195,35"},
        ],
        tiposCartao: []
      }

      this.resumoDespesas = {
        efetuadoRecebido: {descricao:'Pagamento efetuado', valor: 'R$ 280,27'},
        aguardando: {descricao:'Aguardando pagamento', valor: 'R$ 746,65'},
        valorTotal: {descricao:'Valor total das despesas', valor: 'R$ 1.026,92'},
      }

      this.despesas = {
        tiposComum: [
          {dia: "08", mes:"Jun", tipocard:"D", descricao: "Aluguel",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 600,00"},
          {dia: "10", mes:"Jun", tipocard:"D", descricao: "Condominio",statusPagamento: true,descricaoStatus: "pago em 02/jun",valor: "- R$ 200,00"},
          {dia: "20", mes:"Jun", tipocard:"D", descricao: "Luz",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 85,23"},
        ],
        tiposCartao: [
          {dia: "08", mes:"Jun", tipocard:"D", descricao: "Aluguel",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 600,00"},
          {dia: "10", mes:"Jun", tipocard:"D", descricao: "Condominio",statusPagamento: true,descricaoStatus: "pago em 02/jun",valor: "- R$ 200,00"},
          {dia: "20", mes:"Jun", tipocard:"D", descricao: "Luz",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 85,23"},
        ],
      }
    }
}
