/**
 * Created by GiangDH on 8/12/16.
 */
import { Component, OnInit } from '@angular/core';

declare var io: any;

@Component({
  selector: 'private-chat',
  template: `
  <div style="margin-left: 100px;">
      <input type="text" #message />
      <button type="submit" (click)="sendMessage(message.value)">Send</button>
    <p *ngFor="let mess of messages">{{mess.sender}}: {{mess.message}}</p>
  </div>

  `,
})

export class PrivateChatComponent {
  messages: Array<any>;
  socket: any;
  room: string = "57add29d313d2a810275e306";
  username: string;
  constructor (){
    this.username = localStorage.getItem('username');
    this.socket = io('https://localhost:80');
    this.messages = [];
    if(this.room){
      var data = {
        room: this.room
      };
      this.socket.emit('subscribe',data);
    }
    this.socket.on('private-message-return', data => {
      this.messages.push(data);
    });
  }
  ngOnInit(): void {


    this.socket.on('room-created', chatRoom => {

      //check if logged in user is belong to the chatRoom
      var isOwner = false;
      isOwner = function (users, username) {
        for (user in users){
          if(user == username){
            return true;
          }
        }
      };

      if(isOwner(chatRoom.users, this.username)){
        var data = {
          room: chatRoom._id
        };
        //join room
        this.socket.emit('subscribe',data);
      }
    });
  }

  sendMessage(message) {
    var data = {
      room: this.room,
      sender: 'Giang',
      message: message,
      receiver: 'Duong'
    };
    this.socket.emit('private-message', data);
  }
}
