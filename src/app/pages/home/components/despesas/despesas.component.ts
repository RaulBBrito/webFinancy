import { Component } from '@angular/core';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent {
  despesas: string[] = [
    'Salário Porto quizenal',
    'Salário Porto mensal',
    'Extra FS quizenal',
    'Extra FS mensal',
    'Salário Porto mensal',
  ];
}
