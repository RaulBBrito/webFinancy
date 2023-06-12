import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IMensal } from '@app/core/interfaces/itipo-item-mes.interface';
import { TipoItemMesService } from '@app/core/services';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';

export interface ValoresHeader {
  renda: string;
  despesa: string;
  cartao: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  static mesSelecionadoHeader = new EventEmitter<any>();
  form: FormGroup;
  mesAnoSelecionado: IMensal = {
    data_mes_ano_mensal: "",
    vlr_saldo_conta_mensal: "0.0",
    vlrt_renda_mensal: "0.0",
    vlrt_despesa_mensal:  "0.0",
    vlrt_cartao_mensal:  "0.0",
  };
  mesesAno: IMensal[] = [];
  mesAtual: IMensal;

  valores:ValoresHeader = {
    renda: "0.0",
    despesa: "0.0",
    cartao: "0.0"
  };

  public renda: string;
  public despesa: string;
  public cartao: string;
  public saldo_mensal: string;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    private tipoItemMesService: TipoItemMesService) {
    this.form = this.fb.group({
      mes: ['', Validators.required],
    })}

  ngOnInit(): void {
    this.getListaMensal();
  }

  ngDoCheck(){
    //console.log("Passei por aqui!");
  }

  verificarSaldo(){
    return this.mesAnoSelecionado?.vlr_saldo_conta_mensal != '0.0' ? this.mesAnoSelecionado?.vlr_saldo_conta_mensal : '0.0';
  }

  getValores(tipo: string): string{
    switch (tipo) {
      case 'renda':
        return (this.mesAnoSelecionado?.vlrt_renda_mensal) ? this.mesAnoSelecionado?.vlrt_renda_mensal: '0.0';
      case 'despesa':
        return (this.mesAnoSelecionado?.vlrt_despesa_mensal) ? this.mesAnoSelecionado?.vlrt_despesa_mensal: '0.0';
      case 'cartao':
        return (this.mesAnoSelecionado?.vlrt_cartao_mensal) ? this.mesAnoSelecionado?.vlrt_cartao_mensal: '0.0';
      case 'mensal':
        return (this.mesAnoSelecionado?.vlr_saldo_conta_mensal) ? this.mesAnoSelecionado?.vlr_saldo_conta_mensal: '0.0';
      default:
        return '0.0';
    } 
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  getMes(item: IMensal){
    this.tipoItemMesService.getListMensal()
      .subscribe((mensal) => {
        this.mesesAno = mensal
        this.mesAtual = this.mesesAno.filter(mes => mes.id_mensal == item.id_mensal)[0];
        this.mesAnoSelecionado = this.mesAtual;
        this.renda= this.formatarValorReal(parseFloat(this.getValores('renda')));
        this.despesa= this.formatarValorReal(parseFloat(this.getValores('despesa')));
        this.cartao= this.formatarValorReal(parseFloat(this.getValores('cartao')));
        this.saldo_mensal= this.formatarValorReal(parseFloat(this.getValores('mensal')));
        HeaderComponent.mesSelecionadoHeader.emit(this.mesAtual);
      });
  }

  getMesValores(item: IMensal){
    
    this.mesAnoSelecionado = item;
    this.renda= this.formatarValorReal(parseFloat(this.getValores('renda')));
    this.despesa= this.formatarValorReal(parseFloat(this.getValores('despesa')));
    this.cartao= this.formatarValorReal(parseFloat(this.getValores('cartao')));
    this.saldo_mensal= this.formatarValorReal(parseFloat(this.getValores('mensal')));
  
    HeaderComponent.mesSelecionadoHeader.emit(item);
    
  }

  getListaMensal(){
    this.tipoItemMesService.getListMensal()
      .subscribe((mensal) => {
        let data = new Date();
        const dataAtual = data.getFullYear()+"-"+String(data.getMonth()+1).padStart(2,'0')+"-"+"01";
        this.getDataFilter(mensal, dataAtual, data.getMonth()+1);
      });
  }

  getDataFilter(mensal: IMensal[], dataAtual: string,  mes: number){
    this.mesesAno = mensal
    this.mesAtual = this.mesesAno.filter(mes => mes.data_mes_ano_mensal == dataAtual)[0];
    this.mesAnoSelecionado = this.mesAtual;

    this.renda= this.formatarValorReal(parseFloat(this.getValores('renda')));
    this.despesa= this.formatarValorReal(parseFloat(this.getValores('despesa')));
    this.cartao= this.formatarValorReal(parseFloat(this.getValores('cartao')));
    this.saldo_mensal= this.formatarValorReal(parseFloat(this.getValores('mensal')));

    if(this.mesAnoSelecionado?.data_mes_ano_mensal && this.mesAnoSelecionado?.data_mes_ano_mensal != ''){
      this.getMesValores(this.mesAnoSelecionado);
    }else{
      let data = new Date();
      let mesAtual = data.getFullYear()+"-"+String(data.getMonth()+1).padStart(2,'0')+"-"+"01";
      
        this.mesAnoSelecionado = {
          data_mes_ano_mensal: mesAtual,
          id_mensal: "0",
          vlr_saldo_conta_mensal: "0.0",
          vlrt_cartao_mensal: "0.0",
          vlrt_despesa_mensal: "0.0",
          vlrt_renda_mensal: "0.0",
        }
        this.mesesAno.push(this.mesAnoSelecionado);
        this.mesAtual = this.mesAnoSelecionado;
        this.getMesValores(this.mesAnoSelecionado);
      
    }

  }

  cadastrarDespesaRenda(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%',
      height: '',
      disableClose: true,
      data: { id_mensal:   this.mesAnoSelecionado.id_mensal, 
              mes:         this.mesAnoSelecionado.data_mes_ano_mensal.slice(5, -3), 
              ano:         this.mesAnoSelecionado.data_mes_ano_mensal.slice(0, -6),
              dia_mes_ano: this.mesAnoSelecionado.data_mes_ano_mensal,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMes({
        id_mensal: result.id_mensal,
        data_mes_ano_mensal: "",
        vlrt_renda_mensal: "",
        vlrt_despesa_mensal: "",
        vlrt_cartao_mensal: "",
        vlr_saldo_conta_mensal: ""
      })
    })
  }

  formatarValorReal(valorMonetario: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorMonetario);
  }

}
