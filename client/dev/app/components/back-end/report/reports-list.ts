import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { Report } from '../../../interface/report';
import { ReportService } from '../../../services/report';
import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';
import {Paginator} from 'primeng/primeng';
declare var $:any;
@Component({
  selector: 'reports-list',
  templateUrl: 'client/dev/app/components/back-end/report/templates/reports-list.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES,Paginator,FORM_DIRECTIVES,DataTable,Column,Header,Footer],
  providers: [ReportService]
})
export class ReportListComponent {
  pageTitle: string = 'Report List';
  errorMessage: string;
  badwordForm: ControlGroup;
  pendingReports: Report[] = [];
  handlingReports: Report[] = [];
  public filter: string = '';
  constructor(fb: FormBuilder, private _reportService: ReportService, private router: Router) {
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
}
