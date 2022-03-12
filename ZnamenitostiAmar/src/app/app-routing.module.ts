import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { ZnamenitostPreviewAdminComponent } from './components/znamenitost-preview-admin/znamenitost-preview-admin.component';
import { ZnamenitostPreviewComponent } from './components/znamenitost-preview/znamenitost-preview.component';

const routes: Routes = [
  {
    path: 'adminPage/znamenitosti/:id',
    component:ZnamenitostPreviewAdminComponent
  },
  {
    path:'adminPage',
    component:AdminComponent
  },
  {
    path:'znamenitosti/:id',
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
