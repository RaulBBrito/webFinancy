import { Injectable } from '@angular/core';
import { ITokenInterface } from '@app/core/interfaces';
import { ITipoItemMes } from '@app/core/interfaces/itipo-item-mes.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoItemRxService{
  public readonly onIsLoading!: BehaviorSubject<boolean>;
  public readonly onLoading: BehaviorSubject<ITipoItemMes | any>;

  constructor(){
    this.onIsLoading = new BehaviorSubject(false);
    this.onLoading = new BehaviorSubject(null);
  }

  reset(): void{
    this.onLoading.next(null);
  }

}