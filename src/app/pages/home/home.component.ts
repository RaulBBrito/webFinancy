import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  //typeSelected: string  = 'ball-beat';
  constructor(
    //private spinnerService: NgxSpinnerService, 
  ){
    //this.typeSelected = 'ball-beat';
  }

  ngOnInit(){
    //this.typeSelected = 'ball-beat';
  }
/*
  public showSpinner(): void {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000); // 5 seconds
  }*/


}
