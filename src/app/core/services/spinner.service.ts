import { Injectable, NgZone } from '@angular/core';
import { defer,  interval,  } from 'rxjs';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { finalize, share} from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  
  private overlayRef: OverlayRef | undefined = undefined;
  
  constructor(
    private overlay: Overlay,
    private ngZone: NgZone,
    private spinner: NgxSpinnerService){

  }

  public spinner$ = defer(() => {
    this.show();
    return interval(500).pipe(
      finalize(() => {
        this.ngZone.run(() => this.hide());
      })
    )
  }).pipe(share());

  public show(): void {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    /*Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        hasBackdrop: true,  
      });
      this.overlayRef.attach(new ComponentPortal(LoadingComponent))
    })*/
  }


  hide(): any {
    if(this.overlayRef){
      this.overlayRef.detach();
      this.overlayRef = undefined;
    }
  }

}


