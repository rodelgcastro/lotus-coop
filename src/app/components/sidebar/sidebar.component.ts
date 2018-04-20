import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../_services/auth.service";

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/profile", title: "User Profile", icon: "person", class: "" },

  { path: "/cooperative", title: "Cooperative", icon: "group_work", class: "" },
  { path: "/business", title: "Business", icon: "business", class: "" }
  // ,
  // { path: "table-list", title: "Table List", icon: "content_paste", class: "" },
  // { path: "typography", title: "Typography", icon: "library_books", class: "" },
  // { path: "icons", title: "Icons", icon: "bubble_chart", class: "" },
  // { path: "maps", title: "Maps", icon: "location_on", class: "" },
  // {
  //   path: "notifications",
  //   title: "Notifications",
  //   icon: "notifications",
  //   class: ""
  // },
  // {
  //   path: "upgrade",
  //   title: "Upgrade to PRO",
  //   icon: "unarchive",
  //   class: "active-pro"
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
