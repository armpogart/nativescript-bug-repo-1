import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'ns-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss'],
    moduleId: module.id,
})
export class SecondComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {
        console.log(`Initializing ${SecondComponent.name}`);
    }

    ngOnDestroy(): void {
        console.log(`Destroying ${SecondComponent.name}`);
    }
}
