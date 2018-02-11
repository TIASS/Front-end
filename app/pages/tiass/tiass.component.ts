import { Component, ViewChild, OnInit, ElementRef, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

import { LoginDataClient } from "../../shared/auth/auth";
import { Config } from "../../shared/config";

@Component({
    //moduleId: module.id,
    selector: "tiass-page",
    templateUrl: "./pages/tiass/tiass.html", 
    styleUrls: ["./pages/tiass/tiass-common.css", "./pages/tiass/tiass.css"],
})
export class TiassComponent implements AfterViewInit, OnInit {
    isLoading = true;
    listLoaded = false;
    LCD: LoginDataClient = Config.LCD;
    tvtext: string = JSON.stringify(Config.LCD);
    private _mainContentText: string;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }
    //@ViewChild("sidedrawerId") public drawerComponent: RadSideDrawerComponent;
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    public drawer: RadSideDrawer;
    
    ngAfterViewInit() {
        console.log("ng After View Init"); 
        alert("ng After View Init")
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    } 

    ngOnInit() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        console.log("openDrawer method reached"); 
        console.log(this.drawer); //returns undefined
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        console.log("onCloseDrawerTap method reached"); 
        console.log(this.drawer); //returns undefined
        this.drawer.closeDrawer();
    } 
}
 