import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Mes {
  mes: string;
  descricao_mes: string;
  ano: string;
}

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
  mesAnoSelecionado: Mes;
  mesesAno: Mes[] = [];
  mesAtual: Mes;

  valores:ValoresHeader = {
    renda: 'R$ 2678,00',
    despesa: 'R$ 1.026,92',
    cartao: 'R$ 141,60'
  } 

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      mes: ['', Validators.required],
    })}

  ngOnInit(): void {
    this.popularPeriodo();
    this.mesAtual = this.mesesAno[3];
    this.mesAnoSelecionado = this.mesesAno[3];
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  getMes(item: any){
    this.mesAnoSelecionado = item;
    console.table(item);
  }

  popularPeriodo(){
    this.mesesAno = [
      {mes: '0', descricao_mes: 'Janeiro', ano: '2023'},
      {mes: '1', descricao_mes: 'Fevereiro', ano: '2023'},
      {mes: '2', descricao_mes: 'Março', ano: '2023'},
      {mes: '3', descricao_mes: 'Abril', ano: '2023'},
      {mes: '4', descricao_mes: 'Maio', ano: '2023'},
    ];
  }

}
