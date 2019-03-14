import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'signup',component:SignUpComponent,
    children:[{path:'',component:SignUpComponent}]
    },
    {path:'',redirectTo:'/signup',pathMatch:'full'
        
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

