import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  getData() {
    return Array.from({ length: 10000 }).map((_, i) => ({
      id: i+1,
      name: `User ${i+1}`,
      value: Math.floor(Math.random() * 1000),
    }));
  }
}