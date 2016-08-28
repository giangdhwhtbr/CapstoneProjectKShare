/**
 * Created by GiangDH on 8/25/16.
 */
import {Component} from '@angular/core';
import {KSpaceService} from '../../../services/kspace';
import {Router} from '@angular/router';

@Component({
  selector: 'public-kspace',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/public-kspace.html',
})

export class CreatePublicKspace {
  errorMessage: string;
  guest: string;
  constructor(private _kspaceService: KSpaceService, private router: Router){}

  createRoom(guest: string){
    if(guest) {
      this._kspaceService.createPublicKspace(guest)
        .subscribe(res => {
          if(res.success){
            localStorage.setItem('guest',guest);
            var url =  '/public-kspace/' + res.id + '/room';
            this.router.navigateByUrl(url);
          }
        })
    } else {
      this.errorMessage = "Vui lòng nhập tên hiển thị của bạn trong kspace"
    }
  }
}
