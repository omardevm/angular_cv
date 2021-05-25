import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
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
    { path: '404', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotFoundModule), },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled', useHash: true })],
    exports: [RouterModule]

})

export class AppRoutingModule { }