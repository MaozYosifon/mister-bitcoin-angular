import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    canActivate: [AuthGuard]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'statistic', component: StatisticComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
