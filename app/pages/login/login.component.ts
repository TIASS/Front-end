
import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { LoginData } from "../../shared/auth/auth";
import { AuthService } from "../../shared/auth/auth.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View, } from "ui/core/view";
import * as pltfinfos from "../../configs/plateform.infos";

@Component({
  selector: "tiass-login-page",
  providers: [AuthService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginData: LoginData;
  @ViewChild("container") container: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService,
    private page: Page) {
    this.loginData = new LoginData();
  }
  successHandler(data:any, callback:Function ) {  
    alert("subscribe login : " + JSON.stringify(data));
    callback();
  }
  errorHandler(error) { alert("Unfortunately we could not find your account."); }
  
  submit() {
    /* this.router.navigate(["/tiass"]); */
    this.authService
    .login(this.loginData) 
    .subscribe( (data) =>{ this.successHandler(data,this.redirectToTiass) } , (error) => this.errorHandler ); 

  }
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";

  }

  ngAfterViewInit(): void {
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: new Color("#301217"),
      duration: 200
    });
  }
  displaySignup() { this.router.navigate(["/signup"]); }
  private redirectToTiass(){ this.router.navigate(["/tiass"]); }
}
