import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],

})
export class UserformComponent implements OnInit {

  user: any = {
    name: '',
    job: '',
    color: '',
  };
  editMode: boolean = false;
  submited: boolean = false;
  confirmModal: boolean = false;
  userForm = new FormGroup({
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
  constructor(private route: ActivatedRoute, private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.user = (this.route.snapshot.data as any).user;
    });

  }


  cancleUser() {
    if (window.matchMedia("(max-width: 768px)").matches) {

      document.getElementById("trans")!.style.animation = "fadeOut 0.5s";
      setTimeout(() => {

        this.router.navigate(['/dashboard/users']);
      }, 400);
    } else {

      this.router.navigate(['/dashboard/users']);
    }

  }
  onSubmitEdit() {
    this.submited = true
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.submited = false
      this.confirmModal = true;

    }

  }
  confirmUpdate(result: boolean) {
    if (!result) {
      this.confirmModal = false;
    }
    else {
      this.toaster.toastrConfig.toastClass = "px-8 py-10 text-white bg-red-300 rounded-xl"
      this.toaster.show("user is updated succesfully", "update user")

    }

  }
  changeEditMode(condition: boolean) {

    if (condition)
      this.editMode = true;
    else
      this.editMode = false;
  }


}
