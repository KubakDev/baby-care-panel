import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  submitted: boolean = false;
  signInForm?: FormGroup;
  isLoading: boolean = false;
  isError: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated || localStorage.getItem('token')) {
      this.router.navigateByUrl('/dashboard');
    }
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(64),
      ]),
    });
  }

  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    if (this.signInForm?.invalid) {
      this.isLoading = false;
      return;
    }
    setTimeout(() => {
      if (this.signInForm?.valid) {
        this.auth.login(
          this.signInForm.value.username,
          this.signInForm.value.password
        );
      }

      if (this.auth.isAuthenticated) {
        this.isLoading = false;
        this.isError = false;
        this.router.navigateByUrl('/dashboard');
      } else if (!this.auth.isAuthenticated) {
        this.isError = true;
        this.isLoading = false;
      }
    }, 2000);
  }
}
