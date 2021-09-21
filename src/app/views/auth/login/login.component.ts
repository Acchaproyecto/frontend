import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    username: [ '', Validators.required ],
    password: [ '', Validators.required ]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(resp => {
      console.log('hola mundo',resp);
      this.router.navigateByUrl('/admin');
    });
  }

}
