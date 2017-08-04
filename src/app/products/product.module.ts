import { ProductDetailHeaderComponent } from './product-detail-header.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductContainerComponent } from './product-container.component';
import { ProductHeaderComponent } from "app/products/product-header.component";

let routes = [{
    path: 'products',
    component : ProductContainerComponent,
    children : [{
        path : ':id',
        component: ProductDetailHeaderComponent
    },
    {
        path : ':id',
        component: ProductDetailComponent,
        outlet : 'body'
    }, {
        path : '',
        component : ProductListComponent,
        outlet: 'body'
    },  {
        path : '',
        component : ProductHeaderComponent,
        outlet: 'header'
    }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        ProductContainerComponent,
        ProductListComponent,
        ProductDetailComponent,
        ProductHeaderComponent,
        ProductDetailHeaderComponent
        
    ],
    providers: [],
})
export class ProductModule { }
