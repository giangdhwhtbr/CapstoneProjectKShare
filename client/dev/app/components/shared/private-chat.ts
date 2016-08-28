/**
 * Created by GiangDH on 8/12/16.
 */
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { ChatRoom } from '../../interface/chat-room';
import { ChatService } from '../../services/chat';
import { NotificationService } from '../../services/notification';
import { UserService } from '../../services/users';
import { Subscription } from 'rxjs/Subscription';

declare var io: any;
declare var $: any;

@Component({
  selector: 'private-chat',
  templateUrl: 'client/dev/app/components/shared/templates/chatbox.html',
  styleUrls: ['client/dev/app/components/shared/styles/chatbox.css']
})

export class PrivateChatComponent {
  messages: Array<any>;
  socket: any;
  username: string;
  receiver: string;
  allChatRooms: Array<ChatRoom>;
  sub: Subscription;
  currentRoom: any;
  mess:string;
  avatar: string;
  constructor(private _chatService: ChatService, private _noti: NotificationService, private _userService: UserService) {

    this.currentRoom = {
      id: '',
      messages: []
    };
    this.username = localStorage.getItem('username');
    this.socket = io('https://localhost:80');
    this.allChatRooms = [];
  }

  ngOnInit(): void {
    var numItems = $('.text-message').length;
    $("#cntAllText").animate({ scrollTop: 200*numItems });
    this.socket.on('private-message-return', data => {
        var news = 0;
        // New message token
        for (var user of data.users) {
          if (user.user === this.username) {
            news = user.newMessages;
            var numItems = $('.text-message').length;
            $("#cntAllText").animate({ scrollTop: 200*numItems });
          }
        }
        // Enter message to the current room
        if(data.id === this.currentRoom.id){
          this.currentRoom.messages.push(data);
        }
        // update room last message
        for (var room of this.allChatRooms) {
          if (room._id === data.id) {
            room.lastSent = data.sentAt;
            room.lastMsg = data.message;
            room.newMessages = news;
          }
        }
        // Sort chat room by the newest
        this.allChatRooms.sort(function (a, b) {
          if (a.lastSent > b.lastSent) {
            return -1;
          } else if (a.lastSent < b.lastSent) {
            return 1;
          }
          return 0;
        });
    });
  // Reset news notification
    this.socket.on('private-message-reset', data => {
      var news = 0;
      for (var user of data.users) {
        if (user.user === this.username) {
          news = user.newMessages;
        }
      }
      for (var room of this.allChatRooms) {
        if (room.friendName === data.receiver) {
          room.newMessages = news;
        }
      }
    });
    if(this.username){
      this.loadAva();
      this.listAllChatRoom();
    }
  }

  loadAva() {
    this._userService.loadAva(this.username)
      .subscribe(res => {
      this.avatar = res.linkImg;
    },err => {
      console.log(err);
      });
  }

  listAllChatRoom() {
    this.allChatRooms = [];
    if (localStorage.getItem('username')) {
      this.sub = this._chatService.getAllChatRoomOfUser(this.username)
        .subscribe((chatRooms) => {
          if (chatRooms) {
            for (var chatRoom of chatRooms) {
              this.socket.emit('subscribe-private-chat', chatRoom._id);
              var room = {
                _id: chatRoom._id,
                chatLogs: chatRoom.chatLogs,
                newMessages: 0
              }

              if (chatRoom.chatLogs.length) {
                room.lastMsg = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].message;
                room.lastSent = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].sentAt;
              }

              for (var user of chatRoom.users) {
                if (user.user !== this.username) {
                  room.friendName = user.user;
                  room.friendAva = user.avatar;
                }
                if (user.user === this.username) {
                  room.newMessages = user.newMessages
                }
              }
              this.allChatRooms.push(room);

              this.allChatRooms.sort(function (a, b) {
                if (a.lastSent > b.lastSent) {
                  return -1;
                }
                if (a.lastSent < b.lastSent) {
                  return 1;
                }
                return 0;
              });
              this.receiver = this.allChatRooms[0].friendName;
              this.currentRoom.id = this.allChatRooms[0]._id;
              this.currentRoom.messages = this.allChatRooms[0].chatLogs;
            }
          }
        });
    }
  }

  getReceiver(slRoom: ChatRoom): void {
    var numItems = $('.text-message').length;
    $("#cntAllText").animate({ scrollTop: 200*numItems });
    this.currentRoom.id = slRoom._id;
    this.receiver = slRoom.friendName;
    this.currentRoom.messages = slRoom.chatLogs;
    var data = {
      sender: this.username,
      receiver: this.receiver
    };
    this.socket.emit('reset-new-message', data);
  }

  sendMessage() {
    if(this.mess){
      var data = {
        sender: this.username,
        message: this.mess,
        receiver: this.receiver,
        avatar: this.avatar
      };
      this._noti.alertNotification('Bạn có tin nhắn mới', this.receiver, '');
      this.socket.emit('private-message', data);
      this.socket.emit('reset-new-message', data);
      this.mess="";


    }
    var numItems = $('.text-message').length;
    $("#cntAllText").animate({ scrollTop: 200*numItems });
  }

}
