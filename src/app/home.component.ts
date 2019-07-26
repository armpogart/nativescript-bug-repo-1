import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { OnTabSelectedEventData } from "nativescript-bottom-navigation";
import { EventData } from "tns-core-modules/data/observable";

enum Tabs {
    Home,
    Favorites,
    Cart,
    Account,
    More,
}

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    selectedTab: Tabs = Tabs.Home;
    tabs = Tabs;

    constructor(private router: RouterExtensions, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.router.navigate([{ outlets: {
            firstTab: ["first"],
            secondTab: ["second"],
        } }], { relativeTo: this.route });
    }

    onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
        if (args.newIndex !== args.oldIndex) {
            console.log(`Selected tab index: ${args.newIndex}`);
            this.selectedTab = args.newIndex;
            // this.navigateOutlets();
        }
    }

    private navigateOutlets(): void {
        this.router.navigate([{ outlets: {
            firstTab: ["first"],
            secondTab: ["second"],
        } }], { relativeTo: this.route });
    }
}
