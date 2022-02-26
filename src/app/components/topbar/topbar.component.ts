import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() eventChange = new EventEmitter<Event>();

  onClick(event: Event) {
    this.eventChange.emit(event);
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private toaster: ToasterService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.auth.logout();
    if (!this.auth.isAuthenticated) this.router.navigateByUrl('');
  }

  onSuccess() {
    this.toaster.success();
    this.toaster.info();
    this.toaster.warning();
    this.toaster.error();
  }
}
