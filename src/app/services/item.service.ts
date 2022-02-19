import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items = [
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      color: 'Blue',
    },
    {
      name: 'Art Hagerty',
      job: 'Desktop Support Technician',
      color: 'Purple',
    },
    { name: 'Marjy Ferencz', job: 'Office Assistant I', color: 'Crimson' },
    { name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
  ];
  constructor() {}
}
