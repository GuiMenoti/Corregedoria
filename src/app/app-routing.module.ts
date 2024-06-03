import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorregedoriaComponent } from './corregedoria/corregedoria.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecionamento da rota raiz
  { path: 'home', component: HomeComponent }, // Rota para o HomeComponent
  { path: "corregedoria", component: CorregedoriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
