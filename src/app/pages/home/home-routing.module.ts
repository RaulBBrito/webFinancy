import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: RelatorioComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }