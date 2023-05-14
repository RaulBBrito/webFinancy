import { Component, Input } from '@angular/core';
import { IResumo } from '@app/core/interfaces';

@Component({
  selector: 'resumo-valores',
  templateUrl: './resumo-valores.component.html',
  styleUrls: ['./resumo-valores.component.scss']
})
export class ResumoValoresComponent {

 @Input() dados: IResumo = {};

}