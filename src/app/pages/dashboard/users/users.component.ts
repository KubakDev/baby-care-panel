import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sort: 'asc' | 'desc' | 'none' = 'none';
  searchText?: string;
  isLoading: boolean = false;
  isError: boolean = false;
  private subjKeyUp = new Subject<any>();

  copy: any[] = [
    { name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
    {
      name: 'Art Hagerty',
      job: 'Desktop Support Technician',
      color: 'Purple',
    },
    { name: 'Marjy Ferencz', job: 'Office Assistant I', color: 'Crimson' },
    { name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },

  ];
  users?: any[];

  //#endregion

  //#region Constructor

  constructor(private itemService: ItemService) { }

  //#endregion

  //#region Functions

  ngOnInit(): void {
    this.itemService.url = "an user";
    this.subjKeyUp
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((a: any) => {
        this.searchText = a;
        this.onSearch();
      });
    this.isLoading = true;

    setTimeout(() => {
      this.users = [
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
      this.isLoading = false;
    }, 700);
  }

  onName(): void {
    if (this.sort === 'none') {
      this.users?.sort((a: any, b: any) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      this.sort = 'asc';
    } else if (this.sort === 'asc') {
      this.users?.sort((a: any, b: any) => (a.name > b.name ? -1 : 1));
      this.sort = 'desc';
    } else if (this.sort === 'desc') {
      this.users = [
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
      this.sort = 'none';
    }
  }

  onType($event: any): void {
    const val: string = $event.target.value;
    this.subjKeyUp.next(val);
  }

  onClear(): void {
    this.searchText = undefined;
    this.users = this.copy;
    this.subjKeyUp.next(undefined);

  }

  //#endregion

  //#region  Private Functions

  private onSearch(): void {
    if (!this.searchText) {
      this.users = this.copy;
      return;
    }
    this.users = this.users?.filter((i) =>
      i.name.toLowerCase().startsWith(this.searchText?.toLowerCase())
    );
  }


}
