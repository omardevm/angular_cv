import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThirdRoutingModule } from "./third-routing.module";
import { ThirdComponent } from "./third.component";

@NgModule({
    declarations: [ThirdComponent],
    imports: [
        CommonModule,
        ThirdRoutingModule
    ]
})

export class ThirdModule { }