import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private item: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getItem(+params['userId']);
    });
  }

  getItem(id: number) {
    this.user.name = this.item.items[id].name;
    this.user.job = this.item.items[id].job;
    this.user.color = this.item.items[id].color;
  }
  cancleUser() {
    this.router.navigate(['/dashboard/users']);
  }
}
