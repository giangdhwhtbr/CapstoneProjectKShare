/**
 * Created by GiangDH on 8/12/16.
 */
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { ChatRoom } from '../../interface/chat-room';
import { ChatService } from '../../services/chat';
import { NotificationService } from '../../services/notification';

import { Subscription } from 'rxjs/Subscription';

declare var io: any;
declare var $: any;

@Component({
  selector: 'private-chat',
  templateUrl: 'client/dev/app/components/shared/templates/chatbox.html',
  styleUrls: ['client/dev/app/components/shared/styles/chatbox.css']
})

export class PrivateChatComponent {
  @Output() sendDataToP: EventEmitter<string> = new EventEmitter<string>();
  messages: Array<any>;
  socket: any;
  username: string;
  receiver: string;
  allChatRooms: Array<ChatRoom>;
  sub: Subscription;
  currentRoom: string;
  mess:string;

  constructor(private _chatService: ChatService,
    private _noti: NotificationService) {
    this.username = localStorage.getItem('username');
    this.socket = io('https://localhost:80');
    this.messages = [];
    this.allChatRooms = [];
  }

  ngOnInit(): void {
    this.socket.on('private-message-return', data => {
      var news = 0;
      for (var user of data.users) {
        if (user.user === this.username) {
          news = user.newMessages;
        }
      }
      for (var room of this.allChatRooms) {
        if (room.friendName === data.sender) {
          room.lastSent = data.sentAt;
          room.lastMsg = data.message;
          room.newMessages = news;
        }
      }
      this.allChatRooms.sort(function (a, b) {
        if (a.lastSent > b.lastSent) {
          return -1;
        } else if (a.lastSent < b.lastSent) {
          return 1;
        }
        return 0;
      });
      this.messages.push(data);
    });

    this.socket.on('private-message-reset', data => {
      var news = 0;
      for (var user of data.users) {
        if (user.user === this.username) {
          news = user.newMessages;
        }
      }
      for (var room of this.allChatRooms) {
        if (room.friendName === data.receiver) {
          room.lastMsg = data.message;
          room.newMessages = news;
        }
      }
    });

    this.socket.on('new-message-notification', data => {
      this.sendDataToP.emit([data.receiver, true]);
    });

    this.listAllChatRoom();

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
              };

              if (chatRoom.chatLogs.length) {
                room.lastMsg = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].message;
                room.lastSent = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].sentAt;
              }

              for (var user of chatRoom.users) {
                if (user.user !== this.username) {
                  room.friendName = user.user;
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
              this.messages = this.allChatRooms[0].chatLogs;
              this.currentRoom = this.allChatRooms[0]._id;
            }
          }
        });
    }
  }

  getReceiver(slRoom: ChatRoom): void {
    //Click on friend
    this.messages = [];
    // this.news = 0;
    this.currentRoom = slRoom._id;
    this.receiver = slRoom.friendName;
    this.messages = slRoom.chatLogs;
    var data = {
      sender: this.username,
      receiver: this.receiver
    };
    this.socket.emit('reset-new-message', data);
    this.sendDataToP.emit([data.sender, false]);
  }

  sendMessage() {
    var data = {
      sender: this.username,
      message: this.mess,
      receiver: this.receiver
    };
    this._noti.alertNotification('Bạn có tin nhắn mới', this.receiver, '');
    this.socket.emit('private-message', data);
    this.socket.emit('reset-new-message', data);
    this.sendDataToP.emit([data.sender, false]);
    this.mess="";
  }

}
