import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FilterPipeModule} from 'ngx-filter-pipe';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';

import 'hammerjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, LoginDialog, SignupDialog} from './login/login.component';

import {LoginDialogInBox, SignupDialogInBox, ViewMoreDialog} from './component/sliderpanel/sliderpanel.component';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material';
import {enableProdMode} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SliderpanelComponent } from './component/sliderpanel/sliderpanel.component';
import { DocterComponent, CheckPatient, CheckEarn, ManageDoctorView} from './users/docter/docter.component';
import { PatientComponent } from './users/patient/patient.component';

import { PharmacistComponent, AvailabilityView, ViewPrescription, CalculateFee  } from './users/pharmacist/pharmacist.component';


import { PrescriptionComponent} from './users/pharmacist/prescription/prescription.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';
import { BookingDialog } from './users/patient/patient.component';


import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { AdminComponent } from './users/admin/admin.component';
import { PatientRecordsService } from './shared/patientRecords/patient-records.service';
import {MatTabsModule} from '@angular/material/tabs';
import { MedicineComponent } from './users/admin/medicine/medicine.component';
import { AddMedicineComponent } from './users/admin/add-medicine/add-medicine.component';
import { UpdateMedicineComponent } from './users/admin/update-medicine/update-medicine.component';
import { DoctorDetailComponent } from './users/admin/doctor-detail/doctor-detail.component';
import { PharmacistDetailsComponent } from './users/admin/pharmacist-details/pharmacist-details.component';

// for docter dash board
// import { CheckPatient } from './users/docter/checkPatient';

@NgModule({
  declarations: [
    AppComponent,
    //FilterPipeModule,
    LoginComponent,
    LoginDialog,
    LoginDialogInBox,
    SignupDialog,
    SignupDialogInBox,
    FooterComponent,
    SliderpanelComponent,
    DocterComponent,
    PatientComponent,
    PharmacistComponent,
    PrescriptionComponent,
    BookingDialog,
    ViewMoreDialog,
    UserProfileComponent,
    CheckPatient,
    CheckEarn,
    AdminComponent,
    ManageDoctorView,
    MedicineComponent,
    AddMedicineComponent,
    UpdateMedicineComponent,


    DoctorDetailComponent,
    AvailabilityView,
    ViewPrescription,
    CalculateFee,
    PharmacistDetailsComponent,


    FilterPipe,
    DoctorDetailComponent
    



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    //FilterPipeModule,
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
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthGuard, UserService, AuthInterceptor , PatientRecordsService],
  bootstrap: [AppComponent],
  // tslint:disable-next-line:max-line-length
  entryComponents: [LoginDialog, SignupDialog, LoginDialogInBox, SignupDialogInBox, BookingDialog, ViewMoreDialog, CheckPatient, CheckEarn, ManageDoctorView, AvailabilityView, ViewPrescription, CalculateFee ]
})
export class AppModule {}
enableProdMode();

