import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SecondComponent } from './second/second.component';

@NgModule({
    declarations: [SecondComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "main" },
            { path: "main", component: SecondComponent },
        ]),
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SecondModule { }
