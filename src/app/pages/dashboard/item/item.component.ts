import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  user: any = {
    name: '',
    job: '',
    color: '',
  };
  constructor(private route: ActivatedRoute, private item: ItemService) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.user = (this.route.snapshot.data as any).user;
    });
  }
}
