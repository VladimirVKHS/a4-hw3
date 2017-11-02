import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private _selectedTab: number = 0;

  public loginForm: FormGroup;
  public  signupForm: FormGroup;

  public constructor(
      private _fb: FormBuilder
  ) { }

  ngOnInit() {
      this.signupForm = this._fb.group({
          firstname: ['', [Validators.required]],
          lastname: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
      this.loginForm = this._fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
      });
  }

  public setTab( tab ) {
    this._selectedTab = tab;
  }

  public isTab( tab ) {
      return (this._selectedTab == tab);
  }

}
