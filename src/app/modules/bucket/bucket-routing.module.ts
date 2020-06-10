import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketComponent } from '../../pages/bucket/bucket.component';

const routes: Routes = [
    {
        path: 'bucket',
        component: BucketComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BucketRoutingModule {}
