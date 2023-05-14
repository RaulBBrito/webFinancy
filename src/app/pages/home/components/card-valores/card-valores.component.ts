import { Component, Input, OnInit } from '@angular/core';
import { Card } from '@app/core/interfaces';

@Component({
  selector: 'card',
  templateUrl: './card-valores.component.html',
  styleUrls: ['./card-valores.component.scss']
})
export class CardValoresComponent implements OnInit {

  @Input() card: Card = {};
  tipoCard: boolean = false;
  ngOnInit(): void {
    this.tipoCard = this.card.tipocard === 'D';
  }

}
