/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RequestService } from '../../../services/requests';
import { UserService } from '../../../services/users';
import { ArticleService } from '../../../services/article';

declare var $: any;

@Component({
  selector: 'news-feed',
  templateUrl: 'client/dev/app/components/front-end/newsfeed/templates/newsfeed.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class NewsFeedComponent implements OnInit {
  roleToken: string;
  userToken: string;
  pageTitle: string = 'Welcome to Knowledge Sharing Network';
  records: any;

  //count for request
  countR1: number;
  countR2: number;

  //count for articles
  countA1: number;
  countA2: number;
  height: number = 400;
  constructor(private _userService: UserService,
    private _requestService: RequestService,
    private _articleService: ArticleService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');

  }
  ngOnInit(): void {
    this.countA1 = this.countR1 = this.countA2 = this.countR2 = 5;
    this.records = [];
    this.getRequests();

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

  }

  seeMore(): void {
    //this.records = [];
    this.countR1 = this.countR1 + 5;
    this.countA1 = this.countA1 + 5;
    this.getRequests();
  }

  getRequests() {
    this._userService.getUserByUserName(this.userToken).subscribe((user) => {
      //get onwknowledgeId of user
      this._requestService.getRequestByUserTags(user.ownKnowledgeIds, this.countR1).subscribe((requests) => {
        //if there is no request which has tagid same as onwknowledgeId
        if (requests.length === 0 || user.ownKnowledgeIds.length === 0) {
          this._requestService.getRequestExceptUserTags(user.ownKnowledgeIds, this.countR2).subscribe((requests) => {
            for (var i = 0; i < requests.length; i++) {
              // push each records to records array 
              this.records.push(requests[i]);
            }
            this.countR2 = this.countR2 + 5;
          });

        } else {
          for (var i = 0; i < requests.length; i++) {
            // push each records to records array
            this.records.push(requests[i]);
          }
        }
        this.getArticles();
      });
    });
  }

  getArticles() {
    this._userService.getUserByUserName(this.userToken).subscribe((user) => {
      //get onwknowledgeId of user
      this._articleService.getArticlesByUserTags(user.ownKnowledgeIds, this.countA1).subscribe((articles) => {
        //if there is no articles which has tagid same as onwknowledgeId
        if (articles.length === 0 || user.ownKnowledgeIds.length === 0) {
          this._articleService.getArticleExceptUserTags(user.ownKnowledgeIds, this.countA2).subscribe((articles) => {
            for (var i = 0; i < articles.length; i++) {
              // push each records to records array 
              this.records.push(articles[i]);
            }
            this.countA2 = this.countA2 + 5;
          });
        } else {
          for (var i = 0; i < articles.length; i++) {
            // push each records to records array
            this.records.push(articles[i]);
          }
        }
        console.log(this.records);
      });
    });

  }

}
