import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import  { Badword} from '../../../interface/badword';
import  { BadwordService} from '../../../services/badword';
import  { UpdateBadwordComponent} from './badword-update';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';

@Component({
  selector: 'badword-list',
  templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-list.html',
  directives: [PaginationControlsCmp,UpdateBadwordComponent,ROUTER_DIRECTIVES,FORM_DIRECTIVES],
  providers: [BadwordService,PaginationService],
  pipes: [PaginatePipe,StringFilterPipe]
})
export class BadwordListComponent {
  pageTitle: string = 'Badword List';
  errorMessage: string;
  badwordForm: ControlGroup;
  badwords: Badword[];
  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  constructor(fb: FormBuilder,private badwordService: BadwordService,private router: Router){
    this.badwordForm = fb.group({
      "word": [""],
    });
  }
  ngOnInit() {
    this.getAll();
  }

  getAll():void {
    this.badwordService
        .getAllBadwords()
        .subscribe((badwords) => {
          this.badwords=badwords;
        });
  }

  private deleteBadword(id):void {
    this.badwordService
      .deleteBadword(id)
      .subscribe(() => {
        this.badwords.forEach((t, i) => {
          if (t._id === id)
            return this.badwords.splice(i, 1);
        });
      })
  }

  findBadwordById(id):void {
    this.badwordService
        .findBadwordById(id)
        .subscribe((badwords) => {
          return badwords;
        });
  }

  addBadword(word):void {
    this.badwordService
        .addBadword(word)
        .subscribe((word) => {
          this.badwords.push(word);
          (<Control>this.badwordForm.controls["word"]).updateValue("");
        });
  }

  public config: IPaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };

}
