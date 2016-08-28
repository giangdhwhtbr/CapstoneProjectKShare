import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CreatePublicKspace} from './create-kspace';
import {JoinPublicKspace} from './join-room';
import {PublicKspaceComponent} from './public-room';
@Component({
  selector: 'public-kspace',
  template: '<router-outlet></router-outlet>',
  precompile: [
    CreatePublicKspace,
    JoinPublicKspace,
    PublicKspaceComponent
  ],
  directives: [ROUTER_DIRECTIVES]
})

export class PublicKspace {

}
