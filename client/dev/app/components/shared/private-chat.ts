/**
 * Created by GiangDH on 8/12/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatRoom } from '../../interface/chat-room';
import { ChatService } from '../../services/chat';

import { Subscription } from 'rxjs/Subscription';

declare var io:any;
declare var $:any;

@Component({
    selector: 'private-chat',
    templateUrl: 'client/dev/app/components/shared/templates/chatbox.html',
    styleUrls:['client/dev/app/components/shared/styles/chatbox.css']
})

export class PrivateChatComponent {
    messages:Array<any>;
    socket:any;
    username:string;
    receiver:string;
    allChatRooms: Array<ChatRoom>;
    sub: Subscription;
    news: Number = 0;
    currentRoom: string;
    constructor(private _chatService:ChatService) {
        this.username = localStorage.getItem('username');
        this.socket = io('https://localhost:80');
        this.messages = [];
        this.allChatRooms = [];
    }

    ngOnInit():void {
      this.socket.on('private-message-return', data => {
        this.currentRoom = data.id;
        this.news++;
        for (var room of this.allChatRooms){
          if (room.friendName === data.receiver){
            room.lastSent = data.sentAt;
            room.lastMsg = data.message;
            room.news =this.news
          }
        }
        this.allChatRooms.sort(function (a, b) {
          if (a.lastSent> b.lastSent) {
            return -1;
          } else if (a.lastSent < b.lastSent) {
            return 1;
          }
          return 0;
        });
        this.messages.push(data);
      });

        //list all chat rooms
      if(localStorage.getItem('username')){
        this.sub = this._chatService.getAllChatRoomOfUser(this.username)
          .subscribe((chatRooms) => {
            if(chatRooms){
              for (var chatRoom of chatRooms){
                this.socket.emit('subscribe-private-chat',chatRoom._id);
                var room = {
                  _id: chatRoom._id,
                  chatLogs:chatRoom.chatLogs,
                };

                if(chatRoom.chatLogs.length){
                  room.lastMsg = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].message;
                  room.lastSent = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].sentAt;
                }

                for (var user of chatRoom.users){
                  if(user !== this.username){
                    room.friendName = user;
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
              }
            }
        });
      }
    }

    getReceiver(slRoom: ChatRoom):void{
        //Click on friend
        this.messages = [];
        this.news = 0;


        this.currentRoom = slRoom._id;
        this.receiver = slRoom.friendName;
        this.messages = slRoom.chatLogs;
    }

    sendMessage(message) {
        var data = {
            sender: this.username,
            message: message,
            receiver: this.receiver
        };
        this.socket.emit('private-message', data);
    }

    ngOnDestroy():void {
      this.sub.unsubscribe();
      this.allChatRooms = [];
    }
}
