import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentAboutComponent } from './component-about/component-about.component';

import { WebServicesService } from './_services/web-services.service';
import { NewcomunitiComponent } from './newcomuniti/newcomuniti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentHomeComponent,
    ComponentAboutComponent,
    NewcomunitiComponent,
    NavComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [WebServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
