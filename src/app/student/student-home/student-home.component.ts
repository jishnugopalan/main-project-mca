import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
username=""
  constructor(private tokenservice:TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenservice.getUser();
    console.log(user)
    this.username=user.username
  }

}
