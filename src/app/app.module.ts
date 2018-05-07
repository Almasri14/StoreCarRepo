import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'zone.js';
import 'reflect-metadata';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreComponent } from './store/store.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreItemComponent } from './store/store-list/store-item/store-item.component';
import {StoreService} from './store/store.service';
import { StoreDetailComponent } from './store/store-detail/store-detail.component';
import { CartComponent } from './cart/cart.component';
import {FilterPipe} from './store/store-list/filter.pipe';
import {AppRoutingModule} from './app-routing.module';
import {CartService} from './cart/cart.service';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import {BlockService} from './login/block.service';
import { SignupComponent } from './signup/signup.component';
import {ServersService} from './servers.service';
import {HttpModule} from '@angular/http';
import {HomeServerService} from './homeServer.service';
import { CartComponentComponent } from './cart/cart-component/cart-component.component';
import { StoreAddComponent } from './store/store-list/store-add/store-add.component';
import { CartPipe } from './cart.pipe';
import { StoreAdminComponent } from './store/store-admin/store-admin.component';
import { StoreAdminItemComponent } from './store/store-admin/store-admin-item/store-admin-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/users-store/user/user.component';
import { UserEditComponent } from './users-list/user-edit/user-edit.component';
import { UsersStoreComponent } from './users-list/users-store/users-store.component';
import { BuyComponentComponent } from './cart/buy-component/buy-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    StoreListComponent,
    StoreItemComponent,
    StoreDetailComponent,
    CartComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent,
    CartComponentComponent,
    StoreAddComponent,
    CartPipe,
    StoreAdminComponent,
    StoreAdminItemComponent,
    UsersListComponent,
    UserComponent,
    UserEditComponent,
    UsersStoreComponent,
    BuyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [StoreService, CartService , LoginService , BlockService , ServersService , HomeServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
