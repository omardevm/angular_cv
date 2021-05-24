import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/first/first.module').then(m => m.FirstModule),
    },
    {
        path: 'projects',
        loadChildren: () => import('./pages/second/second.module').then(m => m.SecondModule),
    },
    {
        path: 'articles',
        loadChildren: () => import('./pages/third/third.module').then(m => m.ThirdModule),
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]

})

export class AppRoutingModule { }