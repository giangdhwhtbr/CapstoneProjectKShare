import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'client/dev/dashboard/templates/shared/nav-bar.html',
  styleUrls: [
    'client/dev/dashboard/styles/styles.css',
    'client/dev/dashboard/styles/bootstrap.min.css'
  ]
})
export class NavbarComponent {
  name: string = `yo, I'm your component :D`;
}
