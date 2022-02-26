import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastr: ToastrService) {}

  success() {
    this.toastr.success('success success', 'Success', {
      toastClass: 'ngx-toastr success-toast',
      positionClass: 'toast-bottom-left',
      timeOut: 6000,
    });
  }
  error() {
    this.toastr.error('successfully failed', 'Error', {
      toastClass: 'ngx-toastr error-toast',
      positionClass: 'toast-bottom-left',
      timeOut: 6000,
    });
  }
  info() {
    this.toastr.info('success success', 'Info', {
      toastClass: 'ngx-toastr info-toast',
      positionClass: 'toast-bottom-left',
      timeOut: 6000,
    });
  }
  warning() {
    this.toastr.warning('success success', 'Warning', {
      toastClass: 'ngx-toastr warning-toast',
      positionClass: 'toast-bottom-left',
      timeOut: 6000,
    });
  }
}
