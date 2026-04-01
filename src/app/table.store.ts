import { signal, computed, effect } from '@angular/core';

export const dataSignal = signal<any[]>([]);
export const filterSignal = signal('');
export const sortField = signal<'id' | 'name' | 'value'>('id');
export const sortDirection = signal<'asc' | 'desc'>('asc');

export const currentPage = signal(1);
export const pageSize = signal(50);

// Filter
const filtered = computed(() =>
  dataSignal().filter((item) =>
    item.name.toLowerCase().includes(filterSignal().toLowerCase())
  )
);

// Sort
const sorted = computed(() => {
  const field = sortField();
  const direction = sortDirection();

  return [...filtered()].sort((a, b) => {
    const result = a[field] > b[field] ? 1 : -1;
    return direction === 'asc' ? result : -result;
  });
});

// Pagination
export const paginatedData = computed(() => {
  const start = (currentPage() - 1) * pageSize();
  const data = sorted().slice(start, start + pageSize());
  console.log('Computed Update - Page:', currentPage(), 'Items:', data.length);
  return data;
});

// Debug
// effect(() => {
//   console.log('Page:', currentPage(), 'Items:', paginatedData().length);
// });

