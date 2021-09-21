import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserInterface, UserService } from './_services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username ?:string;
  counter ?:string;

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserNumber().subscribe(
      data => {
        this.counter = data;
      },
      err => {
        this.counter = JSON.parse(err.error).message;
      }
    );;


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
