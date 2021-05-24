import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondComponent } from "./second.component";

const secondRoutes: Routes = [
    {
        path: '',
        component: SecondComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(secondRoutes)],
    exports: [RouterModule]
})

export class SecondRoutingModule { }