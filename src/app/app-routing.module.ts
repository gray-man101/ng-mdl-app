import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {HomeComponent} from "./home/home.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'company/:id', component: CompanyComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
