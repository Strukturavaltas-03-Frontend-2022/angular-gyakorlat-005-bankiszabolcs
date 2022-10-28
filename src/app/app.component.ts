import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  constructor(private userService : UserService) {}

  users: User[] = this.userService.list

  currentUser: User = new User()

  selectButton(user:User):void{
    this.currentUser = user
  }

  updateButton(user:User):void{
    this.userService.updateUser(user)
  }

  deleteButton(user:User):void{
    this.userService.removeUser(user)
  }



}
