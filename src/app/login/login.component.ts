import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

import { ErrorStateMatcher } from "@angular/material/core";
import { User } from "../_models/user.model";
import { AuthenticationService } from "../_services/auth.service";

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User;
  error = "";

  usernameControl = new FormControl("", [Validators.required]);
  passwordControl = new FormControl("", [Validators.required]);
  matcher = new LoginErrorStateMatcher();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.user = new User();
  }

  login() {
    this.authenticationService
      .authenticate(this.user.username, this.user.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(["/dashboard"]);
        } else {
          this.error = "Username or password is incorrect";
        }
      });
  }

  hasError() {
    if (this.error === "") {
      return false;
    }
    return true;
  }
}
