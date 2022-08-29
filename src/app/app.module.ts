import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ChartComponent } from './components/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SignupComponent } from './pages/signup/signup.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactPreviewComponent,
    HomeComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    StatisticComponent,
    ChartComponent,
    SignupComponent,
    TransferFundComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
