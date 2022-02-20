import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-nothing-to-show',
  templateUrl: './nothing-to-show.component.html',
  styleUrls: ['./nothing-to-show.component.scss']
})
export class NothingToShowComponent implements OnInit {
  page: string | undefined
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.page = this.itemService.url;
  }

}
