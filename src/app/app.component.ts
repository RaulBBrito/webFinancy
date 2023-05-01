import { Component, NgZone ,OnInit } from '@angular/core';

import { EMPTY, Observable, of, throwError, Subscription } from 'rxjs';
import { SpinnerService } from './core/services/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'api-finance';
  constructor(private spinner: NgxSpinnerService){
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}
