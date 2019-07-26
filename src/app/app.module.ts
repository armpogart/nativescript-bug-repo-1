import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativescriptBottomNavigationModule } from "nativescript-bottom-navigation/angular";
import { HomeComponent } from "~/app/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

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
