import { DatePipe } from '@angular/common';
import { TiposComumCartao } from './../../../../core/interfaces/home.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';
import { IResumo, Card } from '@app/core/interfaces';
import { TipoItemMesService } from '@app/core/services';
import { DespesaRendaService } from '@app/core/services/despesa-renda.service';
import { HeaderComponent } from '@app/shared/layout';
import { IMensal } from '@app/core/interfaces/itipo-item-mes.interface';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
  providers: [DatePipe]
})
export class RelatorioComponent implements OnInit {

  usuarioSessao: any;
  resumoRendas: IResumo = {}
  resumoDespesas: IResumo = {}
  rendas: Card = {
    tiposComum: [],
    tiposCartao: []};
  despesas: Card ={
    tiposComum: [],
    tiposCartao: []
  };

  constructor(
    private router: Router,
    private loginService: LoginService,
    private tipoItemMesService: TipoItemMesService,
    private headerComponent: HeaderComponent,
    private datePipe: DatePipe
  ) { }

    logout(){
      this.loginService.logout();
      this.router.navigate(['/login']);
      location.reload();
    }

    ngOnInit(): void {
      let data = new Date();
      //let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      const dataAtual = data.getFullYear()+"-"+String(data.getMonth() + 1).padStart(2,'0');
      //this.popularResumo();
      this.usuarioSessao = this.loginService.getUsuarioLogado();
      if(this.usuarioSessao == null){
        this.logout();
      }

      HeaderComponent.mesSelecionadoHeader.subscribe(item => this.popularDespesas(this.datePipe.transform(item?.data_mes_ano_mensal, 'yyyy-MM')));
    }

    popularResumo(){
      let data = new Date();
      const dataAtual = data.getFullYear()+"-"+String(data.getMonth() + 1).padStart(2,'0')+"-"+"01";
      /*this.tipoItemMesService.getMensal(dataAtual)
      .subscribe((mensal) => {
        console.table(mensal);

        this.popularDespesas(dataAtual);
      });*/

      this.popularDespesas("2023-05");
      this.resumoRendas = {
        /*efetuadoRecebido: {descricao:'Rendas recebidas', valor: 'R$ 748,00'},
        aguardando: {descricao:'Aguardando recebimento', valor: 'R$ 1930,00'},
        valorTotal: {descricao:'Valor total da renda', valor: 'R$ 2.678,00'},*/
      }

      /*this.rendas = {
        tiposComum: [
          {dia: "15", mes:"Jun", tipocard:"R", descricao: "Salário quizenal",statusPagamento: true,descricaoStatus: "recebido em 15/Jun",valor: "+ R$ 748,00"},
          {dia: "30", mes:"Jun", tipocard:"R", descricao: "Sálario mensal",statusPagamento: false,descricaoStatus: "aguardando recebimendo",valor: "+ R$ 650,00"},
          {dia: "15", mes:"Jun", tipocard:"R", descricao: "Extra Montreal",statusPagamento: false,descricaoStatus: "aguardando recebimento",valor: "+ R$ 500,00"},
          {dia: "30", mes:"Jun", tipocard:"R", descricao: "Primeira parcela 13° Sálario",statusPagamento: false,descricaoStatus: "aguardando recebimento",valor: "+ R$ 780,00"},
          {dia: "30", mes:"Jun", tipocard:"R", descricao: "Primeira parcela 13° Sálario",statusPagamento: true,descricaoStatus: "pago em 30/Jun",valor: "+ R$ 195,35"},
        ],
        tiposCartao: []
      }*/

      this.resumoDespesas = {
        /*efetuadoRecebido: {descricao:'Pagamento efetuado', valor: 'R$ 280,27'},
        aguardando: {descricao:'Aguardando pagamento', valor: 'R$ 746,65'},
        valorTotal: {descricao:'Valor total das despesas', valor: 'R$ 1.026,92'},*/
      }

      /*this.despesas = {
        tiposComum: [
          {dia: "08", mes:"Jun", tipocard:"D", descricao: "Aluguel",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 600,00"},
          {dia: "10", mes:"Jun", tipocard:"D", descricao: "Condominio",statusPagamento: true,descricaoStatus: "pago em 02/jun",valor: "- R$ 200,00"},
          {dia: "20", mes:"Jun", tipocard:"D", descricao: "Luz",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 85,23"},
        ],
        tiposCartao: [
          {dia: "08", mes:"Jun", tipocard:"D", descricao: "Cartão Itaú - 6328",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 20.225,23"},
          {dia: "10", mes:"Jun", tipocard:"D", descricao: "Cartão Itaú - 8536",statusPagamento: true,descricaoStatus: "pago em 02/jun",valor: "- R$ 80,27"},
          {dia: "20", mes:"Jun", tipocard:"D", descricao: "Cartão Santander - 4828",statusPagamento: false,descricaoStatus: "aguardando pagamento",valor: "- R$ 36,19"},
        ],
      }*/
    }

    

    popularDespesas(item: string | null){
      const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
      this.despesas.tiposCartao = [];
      this.despesas.tiposComum = [];
      this.rendas.tiposCartao = [];
      this.rendas.tiposComum = [];

      this.tipoItemMesService.getItensMes()
      .subscribe((itensMes) => {
        let efetuadoRecebidoD:number = 0;
        let aguardandoPagamentoD:number = 0;

        let efetuadoRecebidoR:number = 0;
        let aguardandoPagamentoR:number = 0;
        itensMes.forEach(itens => {
          let dataFormatada:string = itens?.data_venc_itens_mes.slice(0,7).toString();
          let statusPagamento:boolean = itens.status_pag_itens_mes === "S";

          if(dataFormatada == item && itens.recurso_itens.id_recurso_itens == "1"){
            let itemMes = {
              dia: itens?.data_venc_itens_mes.slice(8,10).padStart(2,'0'), 
              mes: meses[parseInt(itens?.data_venc_itens_mes.slice(5,7))], 
              tipocard: "D", 
              descricao: itens.desc_itens_mes +" - "+itens.cartao.num_final_cartao,
              statusPagamento: statusPagamento,
              descricaoStatus: statusPagamento ? "pago em "
                +itens?.data_pag_itens_mes.slice(8,10).padStart(2,'0')+" / "+meses[parseInt(itens?.data_pag_itens_mes.slice(5,7))]  
                +" - "+(itens?.data_pag_itens_mes) +" - "+ itens?.data_pag_itens_mes.slice(8,10)
                : "aguardando pagamento",
              valor: this.formatarValorReal(itens.vlr_itens_mes)};

            if(itens.tipo_item.id_tipo_item_mes == "1" ){
              if (this.despesas?.tiposCartao?.length == null) {
                this.despesas.tiposCartao = [];
              }
              this.despesas.tiposCartao.push(itemMes);
            }else{
              if (this.despesas?.tiposComum?.length == null) {
                this.despesas.tiposComum = [];
              }
              itemMes.descricao = itens.desc_itens_mes,
              this.despesas.tiposComum.push(itemMes);
            }

            if(statusPagamento){
              efetuadoRecebidoD = Number(efetuadoRecebidoD) + Number(itens.vlr_itens_mes);
            }else{
              aguardandoPagamentoD = Number(aguardandoPagamentoD) + Number(itens.vlr_itens_mes);
            }
          }else if(dataFormatada == item && itens.recurso_itens.id_recurso_itens == "2"){

            let itemMes = {
              dia: itens?.data_venc_itens_mes.slice(8,10).padStart(2,'0'), 
              mes: meses[parseInt(itens?.data_venc_itens_mes.slice(5,7))], 
              tipocard: "R", 
              descricao: itens.desc_itens_mes +" - "+itens.cartao.num_final_cartao,
              statusPagamento: statusPagamento,
              descricaoStatus: statusPagamento ? "pago em "
                +itens?.data_pag_itens_mes.slice(9,10).padStart(2,'0')+" / "+meses[parseInt(itens?.data_pag_itens_mes.slice(5,7))] 
                : "aguardando pagamento",
              valor: this.formatarValorReal(itens.vlr_itens_mes)};

            if (this.rendas?.tiposComum?.length == null) {
              this.rendas.tiposComum = [];
            }
            itemMes.descricao = itens.desc_itens_mes,
            this.rendas.tiposComum.push(itemMes);
            
            if(statusPagamento){
              efetuadoRecebidoR = Number(efetuadoRecebidoR) + Number(itens.vlr_itens_mes);
            }else{
              aguardandoPagamentoR = Number(aguardandoPagamentoR) + Number(itens.vlr_itens_mes);
            }
          }
        });
        this.resumoDespesas = {
          efetuadoRecebido: {descricao:'Pagamento efetuado', valor: this.formatarValorReal(efetuadoRecebidoD)},
          aguardando: {descricao:'Aguardando pagamento', valor: this.formatarValorReal(aguardandoPagamentoD)},
          valorTotal: {descricao:'Valor total das despesas', valor: this.formatarValorReal(Number(efetuadoRecebidoD) + Number(aguardandoPagamentoD))},
        }
        this.resumoRendas = {
          efetuadoRecebido: {descricao:'Rendas recebidas', valor: this.formatarValorReal(efetuadoRecebidoR)},
          aguardando: {descricao:'Aguardando recebimento', valor: this.formatarValorReal(aguardandoPagamentoR)},
          valorTotal: {descricao:'Valor total da renda', valor: this.formatarValorReal(Number(efetuadoRecebidoR) + Number(aguardandoPagamentoR))},
        }
      });
    }

    formatarValorReal(valorMonetario: number): string {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorMonetario);
    }
}
