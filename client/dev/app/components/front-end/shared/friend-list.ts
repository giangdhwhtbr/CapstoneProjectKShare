import {
  Component,
  OnInit
} from '@angular/core';

import { UserService } from '../../../services/users';

declare  var $ : any;

@Component({
  selector : 'friend-list',
  templateUrl: 'client/dev/app/components/front-end/shared/templates/friend-list.html',
  styleUrls: ['client/dev/app/components/front-end/shared/styles/friend-list.css'],
  directives: []
})

export class FriendListComponent {
  constructor(private _userService: UserService){}

  ngOnInit(): void  {
    //ẩn hiện danh sách chat
    $('.chat_head').click(function(){
      $('.chat_body').slideToggle('slow');
    });
    $('.msg_head').click(function(){
      $('.msg_wrap').slideToggle('slow');
    });
    //đóng phần đang chat
        $('.close').click(function(){
          $('.msg_box').hide();
        });
    //hiện phần chat
    $('.user').click(function(){
      $('.msg_wrap').show();
      $('.msg_box').show();
    });
    //nhấn nút enter
    $('textarea').keypress(
      function(e){
        if (e.keyCode == 13) {
          e.preventDefault();
          var msg = $(this).val();
          $(this).val('');
          if(msg!='')
            $('<div class="msg_b">'+msg+'</div>').insertBefore('.msg_push');
          $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
        }
    });
    //
    //this._userService.getFriendList()
    //  .subscribe(
    //    (friends) => {
    //
    //    },
    //    (error) => {
    //
    //    }
    //  );
    //
  }
}
