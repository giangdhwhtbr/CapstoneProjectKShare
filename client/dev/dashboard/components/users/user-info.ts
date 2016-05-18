import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: 'user-info',
  templateUrl: 'client/dev/dashboard/templates/users/user-info.html'
})
export class UserInfoComponent {
  name: string = `yo, I'm your component :D`;
}
