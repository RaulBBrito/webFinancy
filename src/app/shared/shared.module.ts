import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules';
import { LayoutModule } from './layout';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
  
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ],
  schemas: []
})
export class SharedModule { }
