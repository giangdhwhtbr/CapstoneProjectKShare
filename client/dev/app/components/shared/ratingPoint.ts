/**
 * Created by GiangDH on 8/24/16.
 */
import {Component, onInit, Input} from '@angular/core';


@Component({
  selector:"rating-point",
  template:`
      <div *ngIf="!rateAve">
        <div  class="ui massive heart rating">
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
        </div>
      </div>
      <div *ngIf="rateAve && rateAve <= 1">
        <div  class="ui massive heart rating">
          <i class="icon active"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
          <i class="icon"></i>
        </div>
      </div>
      <div *ngIf="rateAve > 1 && rateAve <= 2">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
            <i class="icon"></i>
            <i class="icon"></i>
          </div>
      </div>
      <div *ngIf="rateAve > 2 && rateAve <= 3">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
            <i class="icon"></i>
          </div>
      </div>
      <div *ngIf="rateAve > 3 && rateAve <= 4">
          <div  class="ui massive heart rating">
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon active"></i>
            <i class="icon"></i>
          </div>
      </div>
      <div *ngIf="rateAve > 4 && rateAve <= 5">
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
  @Input() rateAve: number;
}
