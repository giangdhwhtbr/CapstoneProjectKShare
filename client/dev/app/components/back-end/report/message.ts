
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';

import { Report } from '../../../interface/report';
import { ChatRoom } from '../../../interface/chat-room';

import { ReportService } from '../../../services/report';
import { ChatService } from '../../../services/chat';
import { NotificationService } from '../../../services/notification';

import {StringFilterPipe} from '../shared/filter';
declare var $: any;
declare var io: any;

@Component({
  selector: 'message',
  templateUrl: 'client/dev/app/components/back-end/report/templates/message.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [ReportService],
  pipes: [StringFilterPipe]
})
export class MessageComponent {
  pageTitle: string = 'Report List';

  public filter: string = '';
  roleToken: string;
  socket: any;
  userToken: string;
  mess: string;
  user: string;
  @Input('receiver') receiver: string;

  constructor(fb: FormBuilder, private _reportService: ReportService,
              private router: Router, private _chatService: ChatService, private _noti: NotificationService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
    this.socket = io('https://localhost:80');
  }
  ngOnInit() {
    console.log(this.receiver);
  }

  closeModal(){
    $('#messageModal').closeModal();
  }

  sendMessage() {
    console.log(this.receiver);
    var data = {
      sender: this.userToken,
      message: this.mess,
      receiver: this.receiver
    };
    this._noti.alertNotification('Bạn có tin nhắn mới', this.receiver, '');
    this.socket.emit('private-message', data);
    this.socket.emit('reset-new-message', data);
    this.mess = "";
    $('#messageModal').closeModal();
  }

}