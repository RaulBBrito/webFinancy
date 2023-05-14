import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { MatBadgeModule } from '@angular/material/badge';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { DespesasComponent } from './components/despesas/despesas.component';
import { RendasComponent } from './components/rendas/rendas.component';
import { TabsModule } from '@app/shared/components/tabs';
import { CardValoresComponent } from './components/card-valores/card-valores.component';
import { ResumoValoresComponent } from './components/relatorio/resumo-valores/resumo-valores.component';

@NgModule({
  declarations: [
    HomeComponent,
    RelatorioComponent,
    DespesasComponent,
    RendasComponent,
    CardValoresComponent,
    ResumoValoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    HttpClientModule,
    MatBadgeModule,
    NgxSpinnerModule,
    MatTabsModule,
    TabsModule
  ]
})
export class HomeModule { }