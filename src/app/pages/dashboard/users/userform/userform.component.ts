import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  user: any = {
    name: '',
    job: '',
    color: '',
  };
  submited: boolean = false;
  confirmModal: boolean = false;
  usersForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.maxLength(64)]),
    userName: new FormControl('', [Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.minLength(3), Validators.maxLength(64)]),
    birthDay: new FormControl(''),
    phoneNumber: new FormControl(''),
    state: new FormControl(''),
    location: new FormControl(''),
    diseases: new FormControl([]),
    verified: new FormControl(false),
    babyInfo: new FormGroup({
      dueDate: new FormControl(new Date()),
      gender: new FormControl(""),
      diseases: new FormControl([])

    })

  })
  constructor(private route: ActivatedRoute, private item: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.user = (this.route.snapshot.data as any).user;
    });

  }


  cancleUser() {
    this.router.navigate(['/dashboard/users']);
  }
  onSubmitEdit() {
    this.submited = true
    if (this.usersForm.valid) {
      console.log(this.usersForm.value)
      this.submited = false
      this.confirmModal = true;

    }

  }
  confirmUpdate(result: boolean) {
    if (!result) {
      this.confirmModal = false;
    }

  }
}
