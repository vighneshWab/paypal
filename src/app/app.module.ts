import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ngCore from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// for map
import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// google auth
import { AuthService, AppGlobals } from 'angular2-google-login';


import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { MymapComponent } from './mymap/mymap.component';
import { FirbasetodoComponent } from './firbasetodo/firbasetodo.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component';
import { PaypalcheckoutComponent } from './paypalcheckout/paypalcheckout.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAzx6As3jg4st5K31BBC8JfrSiMkeuu-VE",
  authDomain: "angular4firbaseapp.firebaseapp.com",
  databaseURL: "https://angular4firbaseapp.firebaseio.com",
  projectId: "angular4firbaseapp",
  storageBucket: "",
  messagingSenderId: "484346802236"
};

  export const PayPalButtonModule = paypal.Button.driver('angular2',ngCore);


const routes: Routes = [
  // map '/persons' to the people list component

  { path: 'todo', component: FirbasetodoComponent, },
  { path: 'map', component: MymapComponent, },
  { path: 'googleLogin', component: GoogleloginComponent, },
  { path: 'paypal', component: PaypalcheckoutComponent, }
];

declare const paypal: any;
export const appRouterModule = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    MymapComponent,
    FirbasetodoComponent,
    GoogleloginComponent,
    PaypalcheckoutComponent
  ],
  imports: [
    BrowserModule,
    PayPalButtonModule,
    FormsModule,
    appRouterModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuQVZz8zRt2aFbMdQOsvXT_VFofUb2xv0'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
