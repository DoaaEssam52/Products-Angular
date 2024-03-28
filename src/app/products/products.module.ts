import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDashboardFilterComponent } from './components/product-dashboard-filter/product-dashboard-filter.component';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent, ProductDashboardFilterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ProductCardComponent, ProductListComponent],
})
export class ProductsModule {}
