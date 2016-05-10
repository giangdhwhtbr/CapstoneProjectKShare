import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'client/dev/dashboard/templates/nav-bar.html'
})
export class NavbarComponent {
  name: string = `yo, I'm your component :D`;
}
