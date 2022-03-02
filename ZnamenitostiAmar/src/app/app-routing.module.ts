import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { ZnamenitostPreviewComponent } from './components/znamenitost-preview/znamenitost-preview.component';

const routes: Routes = [
  {
    path:'adminPage',
    component:AdminComponent
  },
  {
    path:'znamenitosti',
    component:ZnamenitostPreviewComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component:LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
