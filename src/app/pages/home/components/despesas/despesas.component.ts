import { Component, Input } from '@angular/core';
import { Card } from '@app/core/interfaces';
@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent {

  @Input() despesas: Card[] = [];
}
