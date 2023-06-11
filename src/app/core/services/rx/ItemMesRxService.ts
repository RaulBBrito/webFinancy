import { Injectable } from '@angular/core';
import { ITokenInterface } from '@app/core/interfaces';
import { IItensMes, ITipoItemMes } from '@app/core/interfaces/itipo-item-mes.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemMesRxService{
  public readonly onIsLoading!: BehaviorSubject<boolean>;
  public readonly onLoading: BehaviorSubject<IItensMes | any>;

  constructor(){
    this.onIsLoading = new BehaviorSubject(false);
    this.onLoading = new BehaviorSubject(null);
  }

  reset(): void{
    this.onLoading.next(null);
  }

}