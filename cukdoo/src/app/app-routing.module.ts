import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestdealComponent } from './bestdeal/bestdeal.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'menu', component: MenuComponent },
  { path:'bestdeal', component:BestdealComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
