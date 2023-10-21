import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "about", component: AboutComponent
}, {
  path: "menu", component: MenuComponent
}, {
  path: "details/:index", component: MenuDetailsComponent
}, {
  path: "cart", component: CartComponent
}, {
  path:"**", redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
