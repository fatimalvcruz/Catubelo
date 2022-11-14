import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAboutComponent } from './component-about/component-about.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { NewcomunitiComponent } from './newcomuniti/newcomuniti.component';


const routes: Routes = [
  { path: 'home', component: ComponentHomeComponent},
  { path: 'about', component: ComponentAboutComponent}, 
  { path: 'newcomuniti', component: NewcomunitiComponent}, 
  { path: '' , redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
