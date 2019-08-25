import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { FirstComponent } from "~/app/first/first/first.component";
import { HomeComponent } from "~/app/home.component";
import { SecondComponent } from "~/app/second/second/second.component";

const routes: Routes = [
    // https://github.com/angular/angular/issues/10981
    // https://github.com/angular/angular/pull/25483
    // https://github.com/angular/angular/issues/17603
    // https://github.com/angular/angular/issues/14662
    // https://github.com/angular/angular/issues/10726
    // https://github.com/angular/angular/issues/18271

    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
                path: "first",
                outlet: "firstTab",
                component: FirstComponent,
                // loadChildren: "~/app/first/first.module#FirstModule",
            },
            {
                path: "second",
                outlet: "secondTab",
                component: SecondComponent,
                // loadChildren: "~/app/second/second.module#SecondModule",
            }
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
