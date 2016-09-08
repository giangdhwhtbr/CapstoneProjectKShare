import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { Report } from '../../../interface/report';
import { ReportService } from '../../../services/report';
import { ChatService } from '../../../services/chat';

import { StringFilterPipe } from '../shared/filter';

import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';

import { MessageComponent } from './message';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $: any;

@Component({
  selector: 'reports-list',
  templateUrl: 'client/dev/app/components/back-end/report/templates/reports-list.html',
  directives: [MessageComponent,ROUTER_DIRECTIVES, FORM_DIRECTIVES,FORM_DIRECTIVES,DataTable,Column,Header,Footer,PrivateChatComponent],
  providers: [ReportService,ChatService]
})
export class ReportListComponent {
  pageTitle: string = 'Report List';
  errorMessage: string;
  badwordForm: ControlGroup;
  pendingReports: Report[] = [];
  handlingReports: Report[] = [];
  public filter: string = '';
  roleToken: string;
  userToken: string;
  constructor(fb: FormBuilder, private _reportService: ReportService, private _chatService: ChatService, private router: Router) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }
  ngOnInit() {
    this.getAllPending();
    this.getAllHandling();
    $('ul.tabs').tabs();
  }
  getAllPending(): void {
    this._reportService
        .getAllReports('pending')
        .subscribe((reports) => {
          this.pendingReports = reports;
        });
  }
  getAllHandling(): void {
    this._reportService
        .getAllReports('handling')
        .subscribe((reports) => {
          this.handlingReports = reports;
        });
  }
  deactivateReport(id: string) {
    var r = confirm("Bạn có muốn xóa?");
    if (r == true) {
      this._reportService.deactivateReport(id).subscribe((r) => {
        console.log('deactivate successfully');
        this.getAllPending();
        this.getAllHandling();
      });
    }
  }
  changeStatusHandling(id: string) {
    var r = confirm("Bạn có muốn thay đổi trạng thái?");
    if (r == true) {
      this._reportService.changeStatusHandling(id).subscribe((r) => {
        console.log('change status successfully');
        this.getAllPending();
        this.getAllHandling();
      });
    }
  }
  createChatRoom(reportedUser: string) {
    if(reportedUser !== this.userToken){
      this._chatService.createChatRoomAdmin(this.userToken, reportedUser)
          .subscribe((chatRoom) => {
            alert('Phòng trò chuyện đã được tạo');
            console.log(reportedUser);
            console.log('create chatRoom successfully');
          });
    }
    this.user = reportedUser;
    $('#messageModal').openModal();
  }
}
