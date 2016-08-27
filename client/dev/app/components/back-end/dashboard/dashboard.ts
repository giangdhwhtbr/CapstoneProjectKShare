import {
    Component,
    OnInit,Input,ElementRef,Output
} from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    Router
} from '@angular/router';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control
} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { Knowledge } from '../../../interface/knowledge';
import { Request } from '../../../interface/request';
import { User } from '../../../interface/user';
import { KSpace } from '../../../interface/kspace';
import { Article } from '../../../interface/article';
import { KnowledgeService } from '../../../services/knowledge';
import { RequestService } from '../../../services/requests';
import  { UserService} from '../../../services/users';
import  { KSpaceService} from '../../../services/kspace';
import  { ArticleService} from '../../../services/article';
import { AuthService} from '../../../services/auth';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $:any;
declare var Materialize:any;
@Component({
    selector: 'dashboard',
    templateUrl: 'client/dev/app/components/back-end/dashboard/templates/dashboard.html',
    styleUrls:['client/dev/app/components/back-end/dashboard/styles/dashboard.css'],
    directives: [CHART_DIRECTIVES],
    providers: [KnowledgeService,RequestService,UserService,KSpaceService]
})
export class DashboardComponent {
  knowledges:Knowledge[];
  users:User[];
  requests:Request[];
  kspaces:KSpace[];
  articles:Article[];
  visible=false;
  numOfActiveRequest=0;
  numOfFinishedRequest=0;
  numOfActiveKspace=0;
  numOfFinishedKspace=0;
  constructor(private _knowledgeService:KnowledgeService, private _articleService:ArticleService,private _requestService:RequestService,private _userService:UserService, private _kspaceService:KSpaceService) {

  }
  ngOnInit():void {
    this.getAllKnowledges();
    this.getAllUsers();
    this.getAllRequests();
    this.getAllKSpaces();
    this.getAllArticles();
  }
  getAllKnowledges():void {
      this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
          this.knowledges = knowledges;
      });
  }
  getAllUsers():void {
      this._userService.getAllUsers().subscribe((users) => {
          this.users = users;
      });
  }
  getAllArticles():void {
      this._articleService.getAllArtAdmin().subscribe((articles) => {
          this.articles = articles;
      });
  }
  getAllRequests():void {
      this._requestService.getAllRequestAdmin().subscribe((requests) => {
          this.requests = requests;
          for(var i = 0;i<this.requests.length;i++){
            if(this.requests[i].status=="pending")
              this.numOfActiveRequest++;
            if(this.requests[i].status=="accepted")
              this.numOfFinishedRequest++;
          }
      });
  }
  getAllKSpaces():void {
      this._kspaceService.getAllKSpace().subscribe((kspaces) => {
          this.kspaces = kspaces;
          console.log(this.kspaces);
          for(var i=0;i<this.kspaces.length;i++){
            if(!this.kspaces[i].hasOwnProperty("finishedAt")){
              this.numOfActiveKspace++;
            }
            if(this.kspaces[i].hasOwnProperty("finishedAt")){
              this.numOfFinishedKspace++;
            }
          }
      });
  }

  draw():void{
    this.polarAreaChartLabels= ['Số tri thức','Số người sử dụng','Số yêu cầu đã tạo','Số KSpace đã tạo','Số bài viết'];
    this.polarAreaChartData=[this.knowledges.length,this.users.length,this.requests.length,this.kspaces.length,this.articles.length];
    this.polarAreaLegend= true;
    this.polarAreaChartType = 'polarArea';
    if(this.visible==false)
      this.visible=true;
    else
      this.visible=false;
  }
  polarAreaChartLabels:string[];
  polarAreaChartData:number[];
  polarAreaLegend:boolean;

  polarAreaChartType:string;

  // events
  public chartClicked(e:any):void {
   console.log(e);
  }

  public chartHovered(e:any):void {
   console.log(e);
  }
}
