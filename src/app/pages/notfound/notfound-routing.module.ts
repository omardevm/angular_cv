import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./notfound.component";

const notfound: Routes = [
    {
        path: '',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(notfound)],
    exports: [RouterModule]
})

export class NotFoundRoutingModule { }