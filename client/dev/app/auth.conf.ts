/**
 * Created by GiangDH on 6/7/16.
 */
import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';

@Directive({
  selector: 'router-outlet'
})

export class LoggedinRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_viewContainerRef: ViewContainerRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute('name') nameAttr:string) {
      super(_viewContainerRef,_loader,_parentRouter,nameAttr);
    this.parentRouter = _parentRouter;

    this.publicRoutes ={
      '':true,
      'kshare': true
    }
  }

  active(instruction: ComponentInstruction){
    let url = instruction.urlPath;
    if(this._canActive(url) == false){
      this.parentRouter.navigateByUrl('/');
    }
    return super.activate(instruction);
  }
  _canActive(url){
    if(!this.publicRoutes[url] && !localStorage.getItem('role')){
      return false;
    }else if(localStorage.getItem('role') && localStorage.getItem('role')!='admin'){
      return false;
    }
    return true;
  }
}
