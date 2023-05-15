import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { SharedModule } from '../shared.module';
import {MatSelectModule} from '@angular/material/select';
import { SelectComponent } from '../components/select/select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AddDespesaRendaComponent } from './components/add-despesa-renda/add-despesa-renda.component';
import { InputComponent } from '../components/input/input.component';
import { TabsModule } from '../components/tabs';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    MenuComponent,
    AddDespesaRendaComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    TabsModule
    //SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }