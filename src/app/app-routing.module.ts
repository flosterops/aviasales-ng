import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRoutingModule } from './modules/main/main-routing.module';
import { BucketRoutingModule } from './modules/bucket/bucket-routing.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full',
    },
    {
        path: 'main',
        loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
    },
    {
        path: 'bucket',
        loadChildren: () => import('./modules/bucket/bucket.module').then((m) => m.BucketModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), MainRoutingModule, BucketRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
