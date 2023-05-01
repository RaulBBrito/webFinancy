import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  
  constructor(
    private spinnerService: NgxSpinnerService, 
    private ngZone: NgZone
  ) {
   }

  ngOnInit(): void {
    setTimeout(() => {
      //this.ngZone.run(() => this.spinner.show())
    });
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      //this.ngZone.run(() => this.spinner.hide())
    });
  }

}
