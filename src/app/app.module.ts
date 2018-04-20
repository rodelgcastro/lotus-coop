import { BrowserModule } from "@angular/platform-browser";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { AppMaterialDesignModule } from "./app.material.design";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

import { CooperativeComponent } from "./cooperative/cooperative.component";
import { BusinessComponent } from "./business/business.component";

import { TableListComponent } from "./table-list/table-list.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

import { AuthGuard } from "./_guards/auth.guard";
import { AuthenticationService } from "./_services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CooperativeComponent,
    BusinessComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AppMaterialDesignModule
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
