import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-dashboard-filter',
  templateUrl: './product-dashboard-filter.component.html',
  styleUrls: ['./product-dashboard-filter.component.scss'],
})
export class ProductDashboardFilterComponent implements OnInit {
  filtersByTime = ['Daily', 'Weekly', 'Monthly'];

  selectedTimeFilter: string;

  constructor() {}

  ngOnInit(): void {
    // Initialize filterByTime to be "Daily" in the first
    this.selectedTimeFilter = this.filtersByTime[0];
  }

  // Update filterByTime when choosing new one
  updateSelectedTimeFilter(filter?: string): void {
    this.selectedTimeFilter = filter;
  }
}
