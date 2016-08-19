/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
import { PrivateChatComponent } from './../../shared/private-chat';
import { listTagComponent } from '../tag/tag';

declare var $:any;

@Component({
  selector: 'list-article',
  templateUrl: 'client/dev/app/components/front-end/article/templates/list-article.html',
  styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
  directives: [
    ROUTER_DIRECTIVES,
    PrivateChatComponent,
      listTagComponent
  ],
  providers: [ArticleService]
})

export class listArticleComponent implements OnInit {

  listArt: Array<any> = [];
  roleToken: string;
  userToken: string;
  num: number = 5;
  articles: any[] = [];
  height: number = 400;
  isExist: boolean = false;

  constructor(public router: Router, private route: ActivatedRoute, private _artService: ArticleService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }

    ngOnInit() {
        if(!this.userToken){
            this._artService.getAllArts(this.num).subscribe((arts) => {
                for (let i = 0; i < arts.length; i++) {
                    if (arts[i].status == "private") {
                        arts.splice(i, 1);
                }
                    this.listArt.push(arts[i]);
                    console.log( this.listArt);
                }
                if(!arts){
                    this.isExist = false;
                }
            });
        }else{
            this.getAllArticles();
        }
        $(window).on("scroll", () => {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                setTimeout(() => {
                    //this.seeMore();
                }, 1000);
                this.height += 30;
            }
        });
    }

    seeMore() {
        this.num = this.num + 5;
        this.getAllArticles();
    }

  getAllArticles() {
    this._artService.getAllArts(this.num).subscribe((arts) => {
      for (let i = 0; i < arts.length; i++) {
        if (arts[i].status == "private") {
          arts.splice(i, 1);
        }
        this.listArt.push(arts[i]);
      }
      if(!arts){
        this.isExist = false;
      }
    });
  }

  searchArticle(text) {
    this.listArt = [];
    if (!text) {
      this.getAllArticles();
      this.isExist = false;
    } else {
      this._artService.searchArticle(text).subscribe((arts) => {
        for (var i = 0; i < arts.length; i++) {
          this.listArt.push(arts[i]);
        }
        if (arts.length <= 0) {
          this.isExist = true;
        }
      });
    }

  }
}