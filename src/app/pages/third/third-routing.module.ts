import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdComponent } from "./third.component";

const thirdRoutes: Routes = [
    {
        path: '',
        component: ThirdComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(thirdRoutes)],
    exports: [RouterModule]
})

export class ThirdRoutingModule { }