
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Switch } from "ui/switch";
import { SigninData } from "../../shared/auth/auth";
import { AuthService } from "../../shared/auth/auth.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { Observable } from "rxjs/Observable";


@Component({
  selector: "tiass-signup-page",
  providers: [AuthService],
  templateUrl: "./pages/signup/signup.html",
  styleUrls: ["./pages/signup/signup-common.css", "./pages/signup/signup.css"]
})

export class SignupComponent implements OnInit {

  errors : Object[];
  signinData: SigninData; 
  @ViewChild("container") container: ElementRef;
  @ViewChild("maleSwitch") maleSwitch: ElementRef;
  @ViewChild("femaleSwitch") femaleSwitch: ElementRef;

  constructor(private router: Router, private authService: AuthService, private page: Page) {
    this.signinData = new SigninData();
  }
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: new Color("#301217"),
      duration: 200
    });
  } 
   
  submit() {
    this.authService.register(this.signinData)
      .subscribe(
        ( data ) => { 
          console.log('*** data register starts : ');
          console.dir(data);
          console.log('*** data register ends : ');
          alert(" RESP : "+JSON.stringify(data)); 
          this.router.navigate(["/main"]);
        },
        () => { 
          alert("Unfortunately we were unable to create your account.")}
      );
  }
   
  setAsWoman(args) {
    let s = <Switch>args.object;
    let maleSwitch = <Switch>this.maleSwitch.nativeElement;
    maleSwitch.checked = !s.checked;
    if (s.checked)
      this.signinData.gender = 0;  
    else
      this.signinData.gender = 1;
  }
  
  setAsMan(args) {
    let s = <Switch>args.object;
    let femaleSwitch = <Switch>this.femaleSwitch.nativeElement;
    femaleSwitch.checked = !s.checked;
    if (s.checked)
      this.signinData.gender = 1;  
    else
      this.signinData.gender = 0;
  }
  setHasShop(args) {
    let s = <Switch>args.object;
    this.signinData.business = s.checked;
  }

  dismissErros(args){

  }
  displayLogin() { this.router.navigate([""]);}
  
}
