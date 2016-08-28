/**
 * Created by GiangDH on 8/25/16.
 */
import {Component, OnDestroy} from '@angular/core';
import {KSpaceService} from '../../../services/kspace';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'public-kspace',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/join-room.html',
})

export class JoinPublicKspace {
  errorMessage: string;
  guest: string;
  sub: Subscription;
  room: string;
  constructor(private _kspaceService: KSpaceService, private router: Router,  private _route: ActivatedRoute){
    this.sub=this._route.params.subscribe(params => {
      this.room = params['id'];
    });
  }

  joinRoom(guest: string){
    if(guest) {
      this._kspaceService.joinPublicKspace(guest, this.room)
        .subscribe(res => {
          if(res.success){
            localStorage.setItem('guest',guest);
            var url =  '/public-kspace/' + this.room +'/room';
            this.router.navigateByUrl(url);
          }
        })
    } else {
      this.errorMessage = "Vui lòng nhập tên hiển thị của bạn trong kspace"
    }
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe()
  }
}
