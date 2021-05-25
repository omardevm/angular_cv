import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first.component";

const firstRoutes: Routes = [
    {
        path: '',
        component: FirstComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(firstRoutes)],
    exports: [RouterModule]
})

export class FirstRoutingModule { }