/**
 * Created by GiangDH on 8/28/16.
 */
import { Component, OnInit, Input } from '@angular/core';
declare var io : any;
@Component({
  selector: 'kspace-chat',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace-chat.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css']
})
export class ChatComponent {
  socket:any;
  messages:Array<any>;
  mess:String;
  username: string;
  guest: string;
  @Input() chatlogs: any;
  @Input() room: string;
  @Input() lecturer: string;
  constructor() {
    this.messages = [];
    this.username = localStorage.getItem('username');
    this.guest = localStorage.getItem('guest');
  }
  ngOnInit(): void {
    this.socket = io('https://localhost:80');
    this.socket.emit('subscribe', {room: this.room});
    this.socket.on("chat_message", (dataReturn) => {
      var isSender:boolean = false;

      if (dataReturn.user == this.username ||dataReturn.user == this.guest) {
        isSender = true;
      }
      var msgObject = {
        user: dataReturn.user,
        msg: dataReturn.msg,
        url: dataReturn.url,
        sender: isSender
      };
      this.messages.push(msgObject);
    });

    if(this.lecturer){
      var isSender:boolean = false;
      for (var log of this.chatlogs) {
        if (log.createdUser == this.username) {
          isSender = true;
        } else {
          isSender = false;
        }
        var msgObject = {
          user: log.createdUser,
          msg: log.message,
          sender: isSender,
          url: log.dataURL
        };
        this.messages.push(msgObject);
      }
    }
  }

  send(message:string, img:any) {
    if(message){
      if (img && this.lecturer) {
        var chalkboard = document.getElementById("chalkboard");
        var dataURL = chalkboard.toDataURL();

        var data = {
          id: this.room,
          createdUser: this.username,
          message: message,
          dataURL: dataURL
        };
        this.socket.emit("chat_message", data);
        this.mess = "";

      } else {
        var data = {
          id: this.room,
          createdUser: this.username,
          message: message
        };
        if(this.guest){
          data = {
            id: this.room,
            guest :this.guest,
            message: message
          };
        }
        this.socket.emit("chat_message", data);
        this.mess = "";
      }
    }
  }
}
