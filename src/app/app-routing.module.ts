import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { BookViewComponent } from './Component/book-view/book-view.component';
import { DiaplayBookComponent } from './Component/diaplay-book/diaplay-book.component';

const routes: Routes = [
  { path: 'log', component: LoginComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'disp', component: DiaplayBookComponent }
    ]
  },
  { path:'bookview',component:BookViewComponent},
  {path:'dis',component:DiaplayBookComponent},
  { path: '', redirectTo: 'log', pathMatch: 'full' } // Default Route




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
