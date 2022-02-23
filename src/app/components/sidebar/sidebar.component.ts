import {
  animate,
  animateChild,
  AUTO_STYLE,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideIn', [
      state('false', style({ width: '56px', visibility: AUTO_STYLE })),
      state('true', style({ width: AUTO_STYLE, visibility: AUTO_STYLE })),
      transition('* <=> *', [
        group([query('@fadeOut', animateChild()), animate(500 + 'ms ease')]),
      ]),
    ]),
    trigger('fadeOut', [
      state('false', style({ opacity: '0' })),
      state('true', style({ opacity: '1' })),
      transition('true => false', animate(100 + 'ms ease')),
      transition('false => true', animate(1500 + 'ms ease')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = true;
  @Input()
  set event(event: Event) {
    if (event) {
      this.toggle();
    }
  }

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
  onLogout() {
    this.auth.logout();
    if (!this.auth.isAuthenticated) this.router.navigateByUrl('');
  }
}
