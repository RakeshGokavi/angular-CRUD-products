// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'; // Assuming you have a SignupComponent
import { LoginComponent } from './login/login.component'; // Assuming you have a LoginComponent
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'product', component: ProductDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
