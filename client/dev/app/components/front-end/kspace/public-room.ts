/**
 * Created by GiangDH on 8/25/16.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {KSpaceService} from '../../../services/kspace';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'public-kspace',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/public-kspace.html',
})

export class PublicKspaceComponent {
  guest: string;
  sub: Subscription;
  room: string;
  constructor(private _kspaceService: KSpaceService, private router: Router, private _route: ActivatedRoute){
    this.sub = this._route.params.subscribe(params => {
      this.room = params['id'];
      this._kspaceService.checkPublicKspace(this.room)
        .subscribe(res => {
            console.log(res);
          },
          err => {
            this.router.navigate(['/error']);
          });
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
