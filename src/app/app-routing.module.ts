import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrownPageComponent } from './components/crown-page/crown-page.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
