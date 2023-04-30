import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { MatBadgeModule } from '@angular/material/badge';
import { RelatorioComponent } from './components/relatorio/relatorio.component';


@NgModule({
  declarations: [
    HomeComponent,
    RelatorioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    HttpClientModule,
    MatBadgeModule
  ]
})
export class HomeModule { }