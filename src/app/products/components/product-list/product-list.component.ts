import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[] = [];

  productLimit: number = 10; // Default products limit

  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProductList(this.productLimit).subscribe({
      next: (response) => {
        this.productList = response;

        this.isLoading = false;
      },
      error: () => (this.isLoading = false),
    });
  }
}
