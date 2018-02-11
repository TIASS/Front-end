import { NgModule, NO_ERRORS_SCHEMA,  } from "@angular/core";
import { NativeScriptFormsModule ,} from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule,  } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

//import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
// --- The built-in 'nativescript-pro-ui' modules, if you are not using 'lazy' loading, uncomment and import the below modules into the 'imports' of the first ngModule (AppModule) of the app. 
import { NativeScriptUISideDrawerModule, SIDEDRAWER_DIRECTIVES } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-pro-ui/calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-pro-ui/autocomplete/angular";
import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule,

    NativeScriptUICalendarModule,
    NativeScriptUIChartModule,
    NativeScriptUIDataFormModule,
    NativeScriptUIAutoCompleteTextViewModule,
    NativeScriptUIGaugesModule,
  ]

})
class AppModuleParent { }
@NgModule({
  imports: [
    AppModuleParent,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents,
    // SIDEDRAWER_DIRECTIVES
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

 /*

Type RadSideDrawerComponent is part of the declarations of 2 modules:
NativeScriptUISideDrawerModule and AppModule! Please consider moving RadSideDrawerComponent 
to a higher module that imports NativeScriptUISideDrawerModule and AppModule.You can also
 create
 a new NgModule that exports and includes RadSideDrawerComponent then import
  that NgModule in NativeScriptUISideDrawerModule and AppModule.
*/