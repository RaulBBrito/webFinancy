import { Component, Input, OnInit } from '@angular/core';
import { Card, TiposComumCartao } from '@app/core/interfaces';

@Component({
  selector: 'card',
  templateUrl: './card-valores.component.html',
  styleUrls: ['./card-valores.component.scss']
})
export class CardValoresComponent implements OnInit {

  @Input() card: TiposComumCartao = {};
  @Input() cardTipoCartao: Card = {
    tiposComum: [],
    tiposCartao: []
  };
  @Input() isTipoCartao: boolean = false;
  isListCartaoVazio: boolean = false;
  tipoCard: boolean = false;
  ngOnInit(): void {
    this.isListCartaoVazio = this.cardTipoCartao?.tiposCartao?.length > 0;
    this.tipoCard = this.card.tipocard === 'D';
  }

}
