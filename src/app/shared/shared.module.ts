import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules';
import { LayoutModule } from './layout';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InputComponent } from './components/input/input.component';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './adapters/custom-date-adapter';


/*export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$',
  suffix: '',
  thousands: '.',
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
}*/

@NgModule({
  declarations: [
    LoadingComponent,
    DialogComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    NgxSpinnerModule,
    MatTabsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    NgxSpinnerModule
  ],
  providers:[
    CurrencyPipe,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: DateAdapter, useClass: CustomDateAdapter}
  ],
  schemas: []
})
export class SharedModule { 
  constructor(
    private dateAdapter: DateAdapter<Date>
  ){
    this.dateAdapter.setLocale('pt-BR');
  }
}
