import {
  Component,
  Inject
} from '@angular/core';
import  { AuthService} from '../../../services/auth';
import  {Router} from "@angular/router";
import  {RouterLink} from "@angular/router-deprecated";
@Component({
  selector: 'nav-bar',
  templateUrl: 'client/dev/app/components/back-end/shared/templates/nav-bar.html',
  styleUrls: ['client/dev/asserts/css/backend-styles.css']
})
export class NavbarComponent {
  constructor(private _auth: AuthService, private router: Router){

  }
  logout(): void {
    this._auth.logout();
    this._auth.logoutClient();
    this.router.navigateByUrl('/kshare');
  }
}
