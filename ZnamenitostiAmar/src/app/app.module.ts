import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ZnamenitostPreviewComponent } from './components/znamenitost-preview/znamenitost-preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ZnamenitostPreviewAdminComponent } from './components/znamenitost-preview-admin/znamenitost-preview-admin.component';
import { TokenInterceptor } from './utils/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    ZnamenitostPreviewComponent,
    ZnamenitostPreviewAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
