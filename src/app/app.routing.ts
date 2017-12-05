import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
    { path: 'Home', component: HomePageComponent } ,     
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
]

  const config: ExtraOptions = {
    useHash: true,
  };
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }    