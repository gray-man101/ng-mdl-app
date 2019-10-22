import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyComponent} from './company/company.component';
import {HomeComponent} from './home/home.component';
import {MdlSnackbarModule, MdlTextFieldModule} from "@angular-mdl/core";
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {SidenavRouterLinkDirective} from './sidenav-router-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    ShoppingCartComponent,
    SidenavRouterLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdlTextFieldModule,
    MdlSnackbarModule
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
