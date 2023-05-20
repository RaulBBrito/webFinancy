import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMensal } from '@app/core/interfaces/itipo-item-mes.interface';

interface Mes {
  mes: string;
  descricao_mes: string;
  ano: string;
}

@Component({
  selector: 'my-select',
  template: `
  <mat-form-field appearance="outline">
    <mat-select [placeholder]="placeholder" [(value)]="mesAtual">
      <mat-option [value]="option" *ngFor="let option of mesesAno" (click)="getSelecionado(option)">
        {{option.data_mes_ano_mensal | date: 'MMMM / y'}}
      </mat-option>
    </mat-select>
  </mat-form-field>
  `,
  styles: [`:host { display: block; } 
    ::ng-deep.mat-select-value { text-align:center !important; color: #FFFFFF !important;} 
    ::ng-deep.mat-form-field-infix{margin-top:-18px;}
    ::ng-deep.mat-select-arrow-wrapper {height: 0 !important;}
    ::ng-deep.mat-form-field-infix {padding: 12px 0 0.75em !important;}
    ::ng-deep.mat-form-field-flex{ border-radius: 50px !important; background-color: #015085 !important; border: 2px solid #287ADA !important; }
    ::ng-deep.mat-select-trigger{padding-top: 10px !important; }
    ::ng-deep.mat-select-arrow { color: #FFFFFF;}
    ::ng-deep.mat-select-min-line{ font-size: 13px;}
    ::ng-deep.mat-form-field-outline-start, ::ng-deep.mat-form-field-outline-gap, ::ng-deep.mat-form-field-outline-end { border: none !important;}
    ::ng-deep.mat-form-field.mat-focused.mat-primary .mat-select-arrow{ color: #FFFFFF;}`]
})
export class SelectComponent  {
  @Input() ctrl: FormControl;
  @Input() mesesAno: IMensal[];
  @Input() placeholder: string;
  @Input() mesAtual: IMensal;

  @Output() mesAnoSelecionado = new EventEmitter<IMensal>();

  getSelecionado(mes: IMensal){
    this.mesAnoSelecionado.emit(mes);
  }
}