import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import 'hammerjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, LoginDialog, SignupDialog} from './login/login.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material';
import {enableProdMode} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SliderpanelComponent } from './component/sliderpanel/sliderpanel.component';
import { OurskillComponent } from './component/ourskill/ourskill.component';
import { ContactComponent } from './component/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDialog,
    SignupDialog,
    NavbarComponent,
    FooterComponent,
    SliderpanelComponent,
    OurskillComponent,
    ContactComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MDBBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialog, SignupDialog]
})
export class AppModule {}
enableProdMode();

