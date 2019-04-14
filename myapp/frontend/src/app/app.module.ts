import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import 'hammerjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, LoginDialog, SignupDialog} from './login/login.component';
import {LoginDialogInBox,SignupDialogInBox,BookingDialog,ViewMoreDialog} from './component/sliderpanel/sliderpanel.component';
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
import { ContactComponent } from './component/contact/contact.component';
import { DocterViewComponent } from './component/docter-view/docter-view.component';
import { DocterComponent } from './users/docter/docter.component';
import { PatientComponent } from './users/patient/patient.component';
import { PharmacistComponent } from './users/pharmacist/pharmacist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDialog,
    LoginDialogInBox,
    SignupDialog,
    SignupDialogInBox,
    NavbarComponent,
    FooterComponent,
    SliderpanelComponent,
    ContactComponent,
    DocterViewComponent,
    DocterComponent,
    PatientComponent,
    PharmacistComponent,
    BookingDialog,
    ViewMoreDialog
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
  entryComponents: [LoginDialog, SignupDialog,LoginDialogInBox,SignupDialogInBox,BookingDialog,ViewMoreDialog]
})
export class AppModule {}
enableProdMode();

