import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagesComponent } from './pages/images/images.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"images",component:ImagesComponent},
  {path:"films",component:FilmsComponent},
  {path:"aboutUs",component:AboutComponent},
  {path:"contactUs",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
