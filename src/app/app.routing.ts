import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./_guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CooperativeComponent } from "./cooperative/cooperative.component";
import { BusinessComponent } from "./business/business.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", redirectTo: "" },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: UserProfileComponent },
      { path: "cooperative", component: CooperativeComponent },
      { path: "business", component: BusinessComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
