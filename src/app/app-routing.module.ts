import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { CrownPageComponent } from './components/pages/crown-page/crown-page.component';
import { ThirdEyeComponent } from './components/pages/third-eye-page/third-eye-page.component';
import { ThroatPageComponent } from './components/pages/throat-page/throat-page.component';
import { HeartPageComponent } from './components/pages/heart-page/heart-page.component';
import { SolarPlexusPageComponent } from './components/pages/solar-plexus-page/solar-plexus-page.component';
import { SacralPageComponent } from './components/pages/sacral-page/sacral-page.component';
import { RootPageComponent } from './components/pages/root-page/root-page.component';
const routes: Routes = [

  { path: '', component:MainComponent},
  { path: 'crown', component: CrownPageComponent },
  { path: 'third-eye', component: ThirdEyeComponent },
  { path: 'throat', component: ThroatPageComponent },
  { path: 'heart', component: HeartPageComponent },
  { path: 'solar-plexus', component: SolarPlexusPageComponent },
  { path: 'sacral', component: SacralPageComponent },
  { path: 'root', component: RootPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
