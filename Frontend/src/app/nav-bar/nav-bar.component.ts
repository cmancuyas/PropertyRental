import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  loggedInUser: string;

  constructor(private router: Router, private alertify: AlertifyService) {}

  ngOnInit() {}

  loggedIn() {
    this.loggedInUser = localStorage.getItem("token");
    return this.loggedInUser;
  }
  onLogout() {
    this.alertify.success("You are logged out");
    localStorage.removeItem("token");
    this.router.navigate(["user/login"]);
  }
}
