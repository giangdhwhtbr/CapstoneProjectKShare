import {
  Component,
  Inject
} from '@angular/core';
import {Input} from "@angular/core";
import {Routes,ROUTER_DIRECTIVES} from "@angular/router";
import  {RouteConfig,RouterLink} from "@angular/router-deprecated";
@Component({
  selector: 'sidebar',
  templateUrl: 'client/dev/dashboard/templates/shared/sidebar.html',
  styleUrls: ['client/dev/dashboard/styles/styles.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent {
  @Input() pageTitle: string;
}
