import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'ns-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
    moduleId: module.id,
})
export class FirstComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {
        console.log(`Initializing ${FirstComponent.name}`);
    }

    ngOnDestroy(): void {
        console.log(`Destroying ${FirstComponent.name}`);
    }
}
