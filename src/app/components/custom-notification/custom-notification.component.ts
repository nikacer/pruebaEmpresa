import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service.service';

@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.scss']
})
export class CustomNotificationComponent implements OnInit {

  mensaje = 'Mensaje por defecto';

  constructor(private _notification: NotificationService) { }

  ngOnInit() {
  }

  info(message: string) {
    this._notification.info(this.mensaje);
  }

  error(message: string) {
    this._notification.error(this.mensaje);
  }

}
