import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ProductModel } from '../../models/product.model';

import { PRODUCT_CONSTANTS } from '../../constants/product-constants';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnChanges {
  @Input() product: ProductModel;

  headerBackgroundColor: string;

  cardColors = PRODUCT_CONSTANTS.PRODUCT_CARD_COLORS;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      this.getRandomColor();
    }
  }

  // Method to get a random color from the card colors array
  getRandomColor(): void {
    const randomIndex = Math.floor(Math.random() * this.cardColors.length);

    this.headerBackgroundColor = this.cardColors[randomIndex];
  }
}
