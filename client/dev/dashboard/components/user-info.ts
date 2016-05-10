import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: 'user-info',
  templateUrl: 'client/dev/User-info/templates/User-info.html',
  styleUrls: ['client/dev/User-info/styles/User-info.css']
})
export class UserInfoComponent {
  name: string = `yo, I'm your component :D`;
}
