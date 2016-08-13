/**
 * Created by GiangDH on 8/12/16.
 */
import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/users';

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
    room:string;
    username:string;
    friendlist:string[]=[];
    friendNames:any[]=[];
    receiver:string;
    room: string;

    constructor(private _userService:UserService) {
        this.username = localStorage.getItem('username');
        this.socket = io('https://localhost:80');
        this.messages = [];
        if (this.room) {
            var data = {
                room: this.room
            };
            this.socket.emit('subscribe', data);
        }
        this.socket.on('private-message-return', data => {
            console.log(data);
            this.messages.push(data);
        });
    }

    ngOnInit():void {
        //list all friends



        this._userService.getFriendList(this.username).subscribe((listFriend)=>{
            for (var i = 0; i < listFriend.length; i++) {

                if (listFriend[i].user2 === this.username && listFriend[i].status === "accepted") {
                    this.friendlist.push(listFriend[i]);
                }

                if (listFriend[i].user1 === this.username && listFriend[i].status === "accepted") {
                    this.friendlist.push(listFriend[i]);
                }

            }
            this.getFriendName();
        });

        this.socket.on('room-created', chatRoom => {
            //check if logged in user is belong to the chatRoom

             var isOwner = function (users, username) {
                for (var user in users) {
                    if (user == username) {
                        return true;
                    }
                }
            };
            if (isOwner(chatRoom.users, this.username)) {
                var data = {
                    room: chatRoom._id
                };
                //join room
                this.socket.emit('subscribe', data);
                this.messages.push(chatRoom.chatLogs[0]);
                this.room = chatRoom._id;
            }
        });

        this.socket.on('room-returned',chatRoom => {
            var isOwner = function (users, username) {
                for (var user in users) {
                    if (user == username) {
                        return true;
                    }
                }
            };
            console.log(chatRoom.users);
            console.log(this.username);
            console.log(isOwner(chatRoom.users, this.username));
            console.log(chatRoom);
            if(isOwner(chatRoom.users, this.username)){
                var data = {
                    room: chatRoom._id
                };
                //join room
                this.socket.emit('subscribe', data);

                this.messages.push(chatRoom.chatLogs[0]);
                this.room = chatRoom._id;
            }
        })
    }

    getReceiver(receiver: string):void{
        this.receiver = receiver;
        var data = {
            user1 : this.username,
            user2 : this.receiver
        }
        this.socket.emit('get-chatroom',data);
    }

    getFriendName():void {
        for(var i = 0; i < this.friendlist.length; i++){

            if(this.friendlist[i].user1 === this.name){
                this.friendNames.push(this.friendlist[i].user2);
            } else {
                this.friendNames.push(this.friendlist[i].user1);
            }

        }
    }


    sendMessage(message) {
        var data = {
            room: this.room,
            sender: this.username,
            message: message,
            receiver: this.receiver
        };
        this.socket.emit('private-message', data);
    }
}
