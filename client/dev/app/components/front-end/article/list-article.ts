/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
declare var $: any;

@Component({
  selector: 'list-article',
  templateUrl: 'client/dev/app/components/front-end/article/templates/list-article.html',
  styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
  directives: [
    ROUTER_DIRECTIVES
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
  constructor(public router: Router, private route: ActivatedRoute, private _artService: ArticleService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }

  ngOnInit() {
    $(window).on("scroll", () => {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        setTimeout(() => {
          this.seeMore();
        }, 1000);
        this.height += 30;
      }
    });
    this.getAllArticles();
  }

  seeMore() {
    this.num = this.num + 5;
    this.getAllArticles();
  }

  getAllArticles() {
    this._artService.getAllArts(this.num).subscribe((arts) => {
      for (let i = 0; i < arts.length; i++) {
        if (arts[i].status == "private" && arts[i].ofUser != this.userToken) {
          arts.splice(i, 1);
        }
        this.listArt.push(arts[i]);
      }
    });
  }
}