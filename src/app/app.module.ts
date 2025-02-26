import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';
import { MaterialModule } from './material/material/material.module';
import { HomeComponent } from './component/dashboard/home/home.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BuyComponent } from './component/dashboard/buy/buy.component';
import { SellComponent } from './component/dashboard/sell/sell.component';
import { MaintainanceComponent } from './component/dashboard/maintainance/maintainance.component';
import { SupportComponent } from './component/dashboard/support/support.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AddpropertyComponent } from './component/dashboard/sell/addproperty/addproperty.component';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { ViewpropertyComponent } from './component/dashboard/buy/viewproperty/viewproperty.component';
import { DeletepropertyComponent } from './component/dashboard/sell/deleteproperty/deleteproperty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    BuyComponent,
    SellComponent,
    MaintainanceComponent,
    SupportComponent,
    AddpropertyComponent,
    ViewpropertyComponent,
    DeletepropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
