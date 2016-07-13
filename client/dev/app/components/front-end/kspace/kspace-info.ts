/**
 * Created by GiangDH on 7/9/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { KSpaceService } from '../../../services/kspace';

@Component ({
  template: `
      <div class="container mg-top-50">
      <button (click)="accessRoom()">{{accessRoomBtn}}</button>
      </div>
    `,
  directives: [ROUTER_DIRECTIVES]
})

export class KSpaceInfoComponent implements OnInit {
  accessRoomBtn: string = 'Access Room';
  kspaceId: string;

  constructor( private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.kspaceId = params['id'];
    })
  }

  ngOnInit(): void {
  }

  accessRoom(): void {
    var specs = 'resizable=yes, fullscreen=yes';
    var name = '_blank';
    var url = '/room/'+this.kspaceId;
    window.open(url, name ,specs);
    //this.router.navigateByUrl('/kspace/room/'+this.kspaceId);
  }
}
