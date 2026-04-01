import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CdkVirtualScrollViewport,ScrollingModule } from '@angular/cdk/scrolling';
import { DataService } from './data.service';

import {
  dataSignal,
  filterSignal,
  paginatedData,
  sortField,
  sortDirection,
  currentPage,
} from './table.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CdkVirtualScrollViewport,ScrollingModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {
  data = paginatedData;
  protected readonly title = signal('smart-data-table');

  constructor(private dataService: DataService) {
    dataSignal.set(this.dataService.getData());
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  onFilter(value: string) {
    filterSignal.set(value);
    currentPage.set(1);
  }

  sort(field: 'id' | 'name' | 'value') {
    if (sortField() === field) {
      sortDirection.set(sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      sortField.set(field);
      sortDirection.set('asc');
    }
  }

  nextPage() {
    currentPage.update((v) => v + 1);
  }

  prevPage() {
    currentPage.update((v) => Math.max(1, v - 1));
  }
}