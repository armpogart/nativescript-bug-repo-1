import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativescriptBottomNavigationModule } from "nativescript-bottom-navigation/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "~/app/first/first/first.component";
import { HomeComponent } from "~/app/home.component";
import { SecondComponent } from "~/app/second/second/second.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativescriptBottomNavigationModule,
        NativeScriptModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FirstComponent,
        SecondComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
