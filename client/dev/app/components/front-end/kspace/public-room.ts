/**
 * Created by GiangDH on 8/25/16.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {KSpaceService} from '../../../services/kspace';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {ChatComponent} from './kspace-chat';
import {RTCComponent} from './webrtc-component';
import {ChalkBoardComponent} from './chalkboard';

@Component({
  selector: 'public-room',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/public-room.html',
  styleUrls:['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  directives: [
    ChalkBoardComponent,
    ChatComponent,
    RTCComponent
  ]
})

export class PublicKspaceComponent {
  guest: string;
  sub: Subscription;
  room: string;
  welcomeMsg: string;
  isUser: boolean = false;
  constructor(private _kspaceService: KSpaceService, private router: Router, private _route: ActivatedRoute){
    this.guest = localStorage.getItem('guest');
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(params => {
      this.room = params['id'];
      this._kspaceService.checkPublicKspace(this.room)
        .subscribe(res => {
          if (res.users) {
            for (var user of res.users) {
              if (user === this.guest) {
                this.welcomeMsg = 'Chào mừng bạn đến với Kspace, chúc bạn có những trải nghiệm tuyệt vời';
                this.isUser = true;
              }
            }
          }
          if(this.isUser === false){
            this.router.navigateByUrl('/public-kspace/'+this.room+'/join');
          }
        },
        err => {
          this.router.navigate(['/error']);
        });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
