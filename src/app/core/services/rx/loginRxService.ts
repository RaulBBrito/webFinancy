import { Injectable } from '@angular/core';
import { ITokenInterface } from '@app/core/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRxService{
  public readonly onIsLoading!: BehaviorSubject<boolean>;
  public readonly onLoading!: BehaviorSubject<ITokenInterface | any>;

  constructor(){
    this.onIsLoading = new BehaviorSubject(false);
    this.onLoading = new BehaviorSubject(null);
  }

  reset(): void{
    this.onLoading.next(null);
  }

}