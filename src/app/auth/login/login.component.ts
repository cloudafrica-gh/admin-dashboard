import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { DafabetService } from 'src/app/services/dafabet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: '';
  email = '';
  password = '';
  isLoadingResults = false;
  url: string = environment.dafaServer;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dafabetService: DafabetService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    console.log('client login form >>>>', form);
    this.authService.login(form)
      .subscribe(res => {
        this.isLoadingResults = true;
        console.log('login response >>>', res);
        if (res.accessToken) {
          this.isLoadingResults = false;
          localStorage.setItem('token', res.accessToken);
          this.router.navigate(['reports/dafabet']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  testExternalApi() {
    this.authService.testApi()
      .subscribe(res => {
        console.log('>>>', res);
      }, err => {
        console.log(err);
      });
  }

  register() {
    this.router.navigate(['auth/register']);
  }
}
