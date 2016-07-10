/**
 * Created by GiangDH on 7/9/16.
 */
import { RouterConfig }          from '@angular/router';


import { KshareComponent } from '../kshare.component';
import { HomeComponent} from "../components/front-end/home/home";
import { RequestListClientComponent } from "../components/front-end/request/request-list";
import { RequestDetailClientComponent } from "../components/front-end/request/request-detail";
import { RequestUpdateClientComponent } from "../components/front-end/request/request-update";
import { RequestCategoryComponent } from "../components/front-end/request/request-search";
import { KSpaceComponent } from "../components/front-end/kspace/kspace";
import { KSpaceListComponent } from "../components/front-end/kspace/kspace-list";
import { KSpaceInfoComponent } from "../components/front-end/kspace/kspace-info";

export const KShareRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/kshare',
    pathMatch: 'full'
  },
  {
    path: 'kshare',
    component: KshareComponent,
    children: [
      {
        path: 'kspace',
        children: [
          {
            path: 'room',
            children: [{
              path:':id', component: KSpaceComponent
            }]
          },
          {
            path: 'info',
            children: [{
              path:':id', component: KSpaceInfoComponent
            }]
          },
          {
            path: '',
            component: KSpaceListComponent
          }
        ]
      },
      {
        path: 'requests',
        children: [
          {
            path: 'info',
            children:[{
              path: ':id', component:RequestDetailClientComponent
            }]
          },
          {
            path: 'update',
            children:[{
              path: ':id', component:RequestUpdateClientComponent
            }]
          },
          {
            path: ':type/:id',
            component: RequestCategoryComponent
          },
          {
            path: '',
            component: RequestListClientComponent
          }
        ]
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

