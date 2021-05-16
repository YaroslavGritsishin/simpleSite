import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CakesPageComponent } from './cakes-page/cakes-page.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children:[
    {path: '', redirectTo: '/', pathMatch:'full'},
    {path:'', component: HomePageComponent},
    {path: 'cakes', component: CakesPageComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
