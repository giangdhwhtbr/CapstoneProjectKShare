import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';

import { Report } from '../../../interface/report';
import { ReportService } from '../../../services/report';

import {StringFilterPipe} from '../shared/filter';

@Component({
    selector: 'reports-list',
    templateUrl: 'client/dev/app/components/back-end/report/templates/reports-list.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [ReportService],
    pipes: [StringFilterPipe]
})
export class ReportListComponent {
    pageTitle: string = 'Report List';
    errorMessage: string;
    badwordForm: ControlGroup;
    reports: Report[];

    constructor(fb: FormBuilder, private _reportService: ReportService, private router: Router) {

    }
    ngOnInit() {
        this.getAll();
    }

    getAll(): void {
        this._reportService
            .getAllReports()
            .subscribe((reports) => {
                this.reports = reports;
                console.log(this.reports);
            });
    }

    deactivateReport(id: string) {
        var r = confirm("Bạn có muốn xóa?");
        if (r == true) {
            this._reportService.deactivateReport(id).subscribe((r) => {
                console.log('deactivate successfully');
                this.getAll();
            });
        }
    }

}
