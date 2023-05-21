import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LoginAdminComponent } from './view/login-admin/login-admin.component';
import { PayReportComponent } from './view/pay-report/pay-report.component';
import { ApprovedProductsComponent } from './view/approved-products/approved-products.component';
import { LoginNutriComponent } from './view/login-nutri/login-nutri.component';
import { AddNutriComponent } from './view/add-nutri/add-nutri.component';
import { SearchClientComponent } from './view/search-client/search-client.component';
import { NutriHubComponent } from './view/nutri-hub/nutri-hub.component';
import { ClientFollowUpComponent } from './view/client-follow-up/client-follow-up.component';
import { AssignPlanComponent } from './view/assign-plan/assign-plan.component';
import { CreatePlanComponent } from './view/create-plan/create-plan.component';
import { LoginClientComponent } from './view/login-client/login-client.component';
import { RegisterClientComponent } from './view/register-client/register-client.component';
import { ClientHubComponent } from './view/client-hub/client-hub.component';
import { AddMeasurementComponent } from './view/add-measurement/add-measurement.component';
import { DailyIntakeComponent } from './view/daily-intake/daily-intake.component';
import { ManageDishComponent } from './view/manage-dish/manage-dish.component';
import { ProgressReportComponent } from './view/progress-report/progress-report.component';
import { AddProductComponent } from './view/add-product/add-product.component';
import { FooterComponent } from './view/footer/footer.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { SidebarAdminComponent } from './view/sidebar-admin/sidebar-admin.component';
import { SidebarClientComponent } from './view/sidebar-client/sidebar-client.component';
import { SidebarNutriComponent } from './view/sidebar-nutri/sidebar-nutri.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginAdminComponent,
    PayReportComponent,
    ApprovedProductsComponent,
    LoginNutriComponent,
    AddNutriComponent,
    SearchClientComponent,
    NutriHubComponent,
    ClientFollowUpComponent,
    AssignPlanComponent,
    CreatePlanComponent,
    LoginClientComponent,
    RegisterClientComponent,
    ClientHubComponent,
    AddMeasurementComponent,
    DailyIntakeComponent,
    ManageDishComponent,
    ProgressReportComponent,
    AddProductComponent,
    FooterComponent,
    NavbarComponent,
    SidebarAdminComponent,
    SidebarClientComponent,
    SidebarNutriComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
