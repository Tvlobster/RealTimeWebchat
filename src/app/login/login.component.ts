import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Users } from '../../types';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private userService: UserService
  ) {}

  ngOnInit (){
    // this.userService.postLoginUser('http://localhost:4000/login',{username:"Tvlobster",password:"test"}).subscribe((response)=>{
    //   console.log(response)
    // });

    //  this.userService.getUsers('http://localhost:4000/find/allUsers',{}).subscribe((Users:Users)=>{
    //   console.log(Users)
    // });
  }
}
