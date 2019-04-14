import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocterComponent } from './users/docter/docter.component';
import { LoginComponent, LoginDialog, SignupDialog} from './login/login.component';
import { SliderpanelComponent } from './component/sliderpanel/sliderpanel.component';
import { PatientComponent } from './users/patient/patient.component';
import { PharmacistComponent } from './users/pharmacist/pharmacist.component';





const routes: Routes = [
{ path:'',component:SliderpanelComponent},
{ path:'docter',component:DocterComponent},
{ path:'patient',component:PatientComponent},
{ path:'pha',component:PharmacistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule {

}
