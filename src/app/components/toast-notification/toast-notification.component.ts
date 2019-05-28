import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.sass']
})
export class ToastNotificationComponent implements OnInit {

  constructor(private nitification: NotificationService) { }

  ngOnInit() {
  }

  info(message: string) {

  }

  error(message: string) {
    
  }

}
