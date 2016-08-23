import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {
    Validators,
    FormBuilder,
    ControlGroup,
    Control,
    FORM_DIRECTIVES,
} from '@angular/common';
declare var $: any;

import { User } from '../../../../interface/user.ts';
import { UserService } from '../../../../services/users';
import {TagService} from '../../../../services/tag';
import { PrivateChatComponent } from './../../../shared/private-chat';
import {AutoComplete, SelectButton, SelectItem} from 'primeng/primeng';


@Component({
    templateUrl: `client/dev/app/components/front-end/user/user-profile/templates/user-info-update.html`,
    styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
    directives: [AutoComplete, PrivateChatComponent],
    providers: [TagService]
})

export class UpdateUserComponent implements OnInit {
    user: User[] = [];
    userId: string = '';
    username: string;
    userinfo: User;
    updateUserForm: ControlGroup;

    filteredKnw: string[];

    tags: any[];
    tagsEx: Array<any>;

    constructor(private fb: FormBuilder,
        private router: Router,
        private _userService: UserService,
        private route: ActivatedRoute,
        private _tagService: TagService) {
        this.route
            .params
            .subscribe(params => {
                this.username = params['name'];
            });

        this.updateUserForm = fb.group({
            fullName: [""],
            birthday: [""],
            phone: [""]
        });
    }
    ngOnInit() {
        this.loadAllTags();
        this.getUserByUsername();
    }

    getUserByUsername() {
        this._userService.getUserByUserName(this.username).subscribe((user) => {
            this.userinfo = user;
            console.log(this.userinfo);
        });
    }

    //tags control
    filterONTag() {
        let oldTag: any[] = [];
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
        });
    }

    //end control tags

    update(user: any): void {
        let tags: any[];
        tags = this.filterONTag();//0 -> oldTags , 1 -> newTags
        user = {
            _id: this.userinfo._id,
            fullName: user.fullName,
            displayName: user.displayName,
            birthday: user.birthday,
            ownKnowledgeIds: tags[0],
            phone: user.phone
        }
        this._userService.updateUser(user, tags[1]).subscribe(
            res => {
                this.router.navigateByUrl('/');
                location.reload();
            },
            err => {
                console.log(err);
            }
        )
    }

    returnHome(): void {
        this.router.navigateByUrl('/');
    }
}
