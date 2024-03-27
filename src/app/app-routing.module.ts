import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoblistingPageComponent } from './joblisting-page/joblisting-page.component';

export const routes: Routes = [
{
  path: '',
  redirectTo: '/joblisting-page',
  pathMatch: 'full'
},
{
  path:'joblisting-page',
  component: JoblistingPageComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
