import { Component, Input } from '@angular/core';
import { Card } from '@app/core/interfaces';
@Component({
  selector: 'app-rendas',
  templateUrl: './rendas.component.html',
  styleUrls: ['./rendas.component.scss']
})
export class RendasComponent {

  @Input() rendas: Card = {
    tiposComum: [],
    tiposCartao: []
  };
}
