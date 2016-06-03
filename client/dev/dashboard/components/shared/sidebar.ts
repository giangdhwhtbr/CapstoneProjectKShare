import {
  Component,
  Inject
} from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'sidebar',
  templateUrl: 'client/dev/dashboard/templates/shared/sidebar.html',
  styleUrls: ['client/dev/dashboard/styles/styles.css']
})

export class SidebarComponent {
  @Input() pageTitle: string;
}
