import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
inner = "";
  constructor(private test : TestService,private router :Router) { }

  ngOnInit(): void {
    this.test.createUsers().subscribe()
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  }, [Validators.required]);

  login() {

    if (this.test.login1()) {
const redirectUrl = '/dashboard';
      this.router.navigate([redirectUrl]);
    }
  
}
  onSubmit(){
    if (!this.form.valid) {
      this.inner = "complete the fields"
    }else{

      this.test.login(this.form.value).subscribe( post => {
        if(post.access_token){
          localStorage.setItem('user',this.form.value.username  )
              localStorage.setItem("token",post.access_token)
              this.login()
            } else {
              
              this.inner = post.message;
            }

      })
    }
  }
}
