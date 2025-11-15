import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  reqpwd: any;
  loginpageForm: FormGroup = new FormGroup("");
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginpageForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  checkLogin() {
    this.reqpwd = this.loginpageForm.value.username.slice(0, 3) + "123"
    if (this.loginpageForm.value.username == "Ratna" && this.loginpageForm.value.password == "12345") {
       Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.router.navigateByUrl("/user/products")
      localStorage.setItem("userloggedin", JSON.stringify(this.loginpageForm.value))
    }
    else if (this.loginpageForm.value.password == this.reqpwd) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.router.navigateByUrl("/admin/view")
      localStorage.setItem("adminloggedin", JSON.stringify(this.loginpageForm.value))

    }
    else {
      Swal.fire({
        title: "oops:(",
        text: "You clicked the button!",
        icon: "error"
      });
    }

  }
  jewellery: any;
  alljewellery = "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw32e1f8d0/homepage/HeroBanner/floral-bloom-desktop.jpg"
}
