import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  isuser:boolean=false
  private roles=[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;

  username="";
  constructor(private tokenservice:TokenStorageService,private router:Router){
    console.log("inn")
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenservice.getToken();
    console.log("Is loggedins",this.isLoggedIn)

    if (this.isLoggedIn) {
      const user = this.tokenservice.getUser();
      this.roles = user.roles;
      console.log("Role",this.roles)

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      if(this.roles[0]=="student"){
        this.isuser=true
        this.router.navigateByUrl("/student-home")
      }

      this.username = user.username;
      console.log("Username",this.username)
    }
  }

  logout(): void {
    this.isuser=false
   
    this.tokenservice.signOut();
    this.router.navigateByUrl("/")
  }
}
