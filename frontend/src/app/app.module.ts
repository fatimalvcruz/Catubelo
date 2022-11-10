import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentAboutComponent } from './component-about/component-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHomeComponent,
    ComponentAboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
