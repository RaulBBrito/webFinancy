import { Component, Input, OnInit } from '@angular/core';
import { Card, TiposComumCartao } from '@app/core/interfaces';

@Component({
  selector: 'card',
  templateUrl: './card-valores.component.html',
  styleUrls: ['./card-valores.component.scss']
})
export class CardValoresComponent implements OnInit {

  @Input() card: TiposComumCartao = {};
  @Input() cardTipoCartao: Card = {};
  @Input() isTipoCartao: boolean = false;
  tipoCard: boolean = false;
  ngOnInit(): void {
    this.tipoCard = this.card.tipocard === 'D';
  }

}
