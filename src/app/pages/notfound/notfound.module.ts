import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundRoutingModule } from "./notfound-routing.module";
import { NotFoundComponent } from "./notfound.component";

@NgModule({
    declarations: [NotFoundComponent],
    imports: [
        CommonModule,
        NotFoundRoutingModule
    ]
})

export class NotFoundModule { }