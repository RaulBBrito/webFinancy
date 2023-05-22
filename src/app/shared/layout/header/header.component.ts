import { Component, OnInit } from '@angular/core';
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

  form: FormGroup;
  mesAnoSelecionado: IMensal = {
    vlr_saldo_conta_mensal: "0"
  };
  mesesAno: IMensal[] = [];
  mesAtual: IMensal;

  valores:ValoresHeader = {
    renda: "",
    despesa: "",
    cartao: ""
  };

  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    private tipoItemMesService: TipoItemMesService) {
    this.form = this.fb.group({
      mes: ['', Validators.required],
    })}

  ngOnInit(): void {
    this.getListaMensal();
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  getMes(item: any){
    this.mesAnoSelecionado = item;
    this.valores = {
      renda: this.mesAnoSelecionado?.vlrt_renda_mensal+"",
      despesa: this.mesAnoSelecionado?.vlrt_despesa_mensal+"",
      cartao: this.mesAnoSelecionado?.vlrt_cartao_mensal+""
    }
  }

  getListaMensal(){
    this.tipoItemMesService.getListMensal()
      .subscribe((mensal) => {
        
        this.mesesAno = mensal
        this.mesAtual = this.mesesAno[1];
        this.mesAnoSelecionado = this.mesesAno[1];

        this.valores = {
          renda:    this.mesAnoSelecionado?.vlrt_renda_mensal+"",
          despesa:  this.mesAnoSelecionado?.vlrt_despesa_mensal+"",
          cartao:   this.mesAnoSelecionado?.vlrt_cartao_mensal+""
        }
        
      });
  }

  cadastrarDespesaRenda(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%',
      height: '',
      data: {mes:       this.mesAnoSelecionado.id_mensal, 
        descricao_mes:  this.mesAnoSelecionado.data_mes_ano_mensal, 
        ano:            this.mesAnoSelecionado.data_mes_ano_mensal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
