/**
 * Created by GiangDH on 8/24/16.
 */
import {Component, onInit, Input} from '@angular/core';


@Component({
  selector:"rating-point",
  template:`
      <div *ngIf="!rate">
        <div  class="ui massive heart rating">
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
        </div>
      </div>
      <div *ngIf="rate && rate <= 1">
        <div  class="ui massive heart rating">
          <i class="icon active"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
        </div>
      </div>
      <div *ngIf="rate > 1 && rate <= 2">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
            <i class="icon"></i>
            <i class="icon"></i>
          </div>
      </div>
      <div *ngIf="rate > 2 && rate <= 3">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
            <i class="icon"></i>
          </div>
      </div>
      <div *ngIf="rate > 3 && rate <= 4">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
          </div>
      </div>
      <div *ngIf="rate > 4 && rate <= 5">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
          </div>
      </div>
  `
})

export class RatingPoint {
  @Input() rate: number;
}
