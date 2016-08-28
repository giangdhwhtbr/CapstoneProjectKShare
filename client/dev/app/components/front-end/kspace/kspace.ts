import { Component, OnInit, Inject} from '@angular/core';
import { KSpaceService } from '../../../services/kspace';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from'@angular/router';
import { RTCComponent } from './webrtc-component';
import { ChatComponent } from './kspace-chat';
import { ChalkBoardComponent } from './chalkboard';
declare var $:any;
declare var io:any;

@Component({
  selector: 'kspace',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ChalkBoardComponent,
    ChatComponent,
    RTCComponent
  ]
})

export class KSpaceComponent {
  id:string;
  username:string;
  lecturer:string;
  learners: any;
  boards:any;
  chatlogs: any;
  room: string;

  constructor(public router:Router,
              private route:ActivatedRoute,
              private _kspaceService:KSpaceService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.lecturer = params['lecturer'];
    });
    this.username = localStorage.getItem('username');
  }

  /*
   * Init when the component is initiated
   * */

  ngOnInit():void {
    this._kspaceService
      .getKSpaceById(this.id)
      .subscribe(kspace => {
          this.boards = kspace.boards;
          this.chatlogs = kspace.chatlog;
          this.room = kspace._id;
          var username = this.username;
          this.learners = kspace.learners;
          var isKspaceUser = function () {
            for (var learner of kspace.learners) {
              if (username === learner) {
                return true;
              }
            }
            if(username === kspace.lecturer){
              return true;
            }
            return false;
          };
          if (!isKspaceUser()) {
            this.router.navigateByUrl('/');
          }
        },
        (error) => {
          this.router.navigateByUrl('/');
        });
  }
}
