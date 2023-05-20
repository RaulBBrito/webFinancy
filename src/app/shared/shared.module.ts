import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules';
import { LayoutModule } from './layout';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InputComponent } from './components/input/input.component';

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
  schemas: []
})
export class SharedModule { }
