import {
  Component,
  Inject
} from '@angular/core';
import  { AuthService} from '../../services/auth-services';
import  {Router} from "@angular/router";
import  {RouterLink} from "@angular/router-deprecated";
@Component({
  selector: 'nav-bar',
  templateUrl: 'client/dev/dashboard/templates/shared/nav-bar.html',
  styleUrls: [
    'client/dev/dashboard/styles/styles.css',
    'client/dev/dashboard/styles/bootstrap.min.css'
  ]
})
export class NavbarComponent {
  constructor(private _auth: AuthService, private router: Router){

  }
  logout(): void {
    this._auth.logout().subscribe((status)=>{
      if(status.login == false){
        this._auth.logoutClient()
      }
    });
    this.router.navigate(['Home']);
  }
}
