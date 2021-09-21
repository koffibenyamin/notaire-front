import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserInterface, UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users?: User[];
  currentUser?: User;
  _message: String = "";
  user?: UserInterface;
  currentIndex = -1;

  constructor(private userService: UserService,private router: Router ) {   }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(msg => this._message = msg);
    //this.user.splice(this.user.findIndex(u => u.id === id), 1);
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }



  retrieveUsers(): void{
    this.userService.getAll()
    .subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  creer(){
    this.router.navigate(['register']);
  }

}
