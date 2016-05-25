/**
 * Created by GiangDH on 5/25/16.
 */
import { ElementRef, DynamicComponentLoader, AttributeMetadata, Directive, Attribute } from 'angular2/core';
import { Router, RouterOutlet, ComponentInstruction } from 'angular2/router';
import { AuthService } from '../dashboard/services/auth-services';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  roleToken: string;

  private parentRouter: Router;

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    // The Boolean following each route below denotes whether the route requires authentication to view
    this.publicRoutes = {
      '': true,
      'admin/users': false
    };
  }

  activate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    this.roleToken = localStorage.getItem('userrole');
    if (!this.publicRoutes[url] && !this._canActive(this.roleToken)) {
      // todo: redirect to Login, may be there a better way?
      this.parentRouter.navigateByUrl('/');
    }
    return super.activate(instruction);
  }
  _canActive(userrole){
    if(!userrole){
      return false;
    }else if(userrole != 'admin' || userrole != 'manager'){
      return false
    }
    return true;
  }
}
