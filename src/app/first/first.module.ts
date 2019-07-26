import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FirstComponent } from './first/first.component';

@NgModule({
    declarations: [FirstComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
          { path: "", redirectTo: "main" },
          { path: "main", component: FirstComponent },
        ]),
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FirstModule { }
