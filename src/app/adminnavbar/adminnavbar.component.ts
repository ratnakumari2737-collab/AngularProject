import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {
  user:any; username:any;
  constructor(private router: Router) { }
  
  logout() {
    localStorage.removeItem("adminloggedin")
    this.router.navigateByUrl("")
  }
  
  ngOnInit() {
    if (localStorage.getItem('adminloggedin')) {
      this.user = localStorage.getItem("adminloggedin");
      this.user = JSON.parse(this.user)
      this.username = this.user.username
    }
    else {
      this.router.navigateByUrl("")
    }
  }
}
