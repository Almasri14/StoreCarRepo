import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartComponent} from './cart/cart.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {BlockService} from './login/block.service';
import {SignupComponent} from './signup/signup.component';
import {UsersListComponent} from './users-list/users-list.component';
const appRoutes: Routes = [
  { path : '' , redirectTo: '/store', pathMatch: 'full'},
  { path : 'store', component : StoreComponent},
  { path : 'cart', component: CartComponent , canActivate : [BlockService]},
  { path : 'login', component: LoginComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'users', component: UsersListComponent},
];
@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
