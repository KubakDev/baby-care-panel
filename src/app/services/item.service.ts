import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url: string | undefined;
  items = [
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      color: 'Blue',
      verified: true
    },
    {
      name: 'Art Hagerty',
      job: 'Desktop Support Technician',
      color: 'Purple',
      verified: true

    },
    { name: 'Marjy Ferencz', job: 'Office Assistant I', color: 'Crimson', verified: false },
    { name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red', verified: true },

  ];
  constructor() { }
}
