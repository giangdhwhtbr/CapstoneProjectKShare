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
            var specs = "width=1024,height=768";
            var name = '_blank';
            var url =  '/public-kspace/' + res.id;
            window.open(url,name,specs);
          }
        })
    } else {
      this.errorMessage = "Vui lòng nhập tên hiển thị của bạn trong kspace"
    }
  }
}
