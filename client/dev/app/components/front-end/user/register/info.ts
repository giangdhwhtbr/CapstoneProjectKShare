import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {
    Validators,
    FormBuilder,
    ControlGroup,
    Control,
    FORM_DIRECTIVES,
} from '@angular/common';

import { User } from '../../../../interface/user.ts';
import { UserService } from '../../../../services/users';
import {TagService} from '../../../../services/tag';
import {AutoComplete,SelectButton,SelectItem} from 'primeng/primeng';

@Component({
    templateUrl: `client/dev/app/components/front-end/user/register/templates/info.html`,
    styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
    directives: [AutoComplete],
    providers: [TagService]
})

export class RegisterInfoComponent implements OnInit{
    user:User[] = [];
    userId:string = '';
    updateUserForm:ControlGroup;

    filteredKnw:string[];

    tags:any[];
    tagsEx:Array<any>;

    constructor(private fb:FormBuilder,
                private router:Router,
                private _userService:UserService,
                private route:ActivatedRoute,
                private _tagService:TagService) {
        this.route
            .params
            .subscribe(params => {
                this.userId = params['id'];
            });

        this.updateUserForm = fb.group({
            fullName: [""],
            displayName: [""],
            birthday: [""],
            phone: [""]
        });
    }
    ngOnInit(){
        this.loadAllTags();
    }

    //tags control
    filterONTag() {
        let oldTag:any[] = [];
        for (let e of this.tagsEx) {
            for (let e1 of this.tags) {
                //catch old tags
                if (e.name == e1) {
                    oldTag.push(e._id);
                    //find out old tags in data tags user
                    let index = this.tags.indexOf(e1);
                    if (index > -1) {
                        //remove old tags to catch new tags
                        this.tags.splice(index, 1);
                    }
                }
            }
        }
        return [oldTag, this.tags];
    }

    filterKnw(event) {
        let query = event.query;
        this.filteredKnw = [];
        for (let i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if (i == this.tagsEx.length - 1) {
                this.filteredKnw.unshift(query.trim());
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query.trim());
        }
    }

    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
            console.log(this.tagsEx);
        });
    }

    //end control tags

    update(user:any):void {
        let tags:any[];
        tags = this.filterONTag();//0 -> oldTags , 1 -> newTags
        user = {
            _id: this.userId,
            fullName: user.fullName,
            displayName: user.displayName,
            birthday: user.birthday,
            ownKnowledgeIds: tags[0]
        }
        this._userService.updateUser(user, tags[1]).subscribe(
            res => {
                this.router.navigateByUrl('/reg/success');
            },
            err => {
                console.log(err);
            }
        )
    }

    returnHome():void {
        this.router.navigateByUrl('/');
    }
}
