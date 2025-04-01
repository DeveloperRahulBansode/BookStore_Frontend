import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../Service/User/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  activeTab: 'login' | 'signup' = 'login';
  showPassword = false;
  showSignupPassword = false;
  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private user:UserService) {}
   
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]]
    });

    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    
  }

  setActiveTab(tab: 'login' | 'signup'): void {
    this.activeTab = tab;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleSignupPasswordVisibility(): void {
    this.showSignupPassword = !this.showSignupPassword;
  }

  forgotPassword(): void {
    // Implement forgot password functionality
    console.log('Forgot password clicked');
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((res:any)=>{
        console.log(res);
      localStorage.setItem('token',res.data.token);
      localStorage.setItem('email',res.data.email);
      localStorage.setItem('UserId',res.data.userId)
      }
      )
      console.log('Login form submitted', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onSignupSubmit(): void {
    if (this.signupForm.valid) {
      let reqData = {
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        mobileNumber: this.signupForm.value.mobileNumber
      }
      this.user.register(reqData).subscribe((res:any)=>{
        console.log(res);
      }
      )
      console.log('Signup form submitted', this.signupForm.value);
      // Implement signup logic
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  loginWithFacebook(): void {
    // Implement Facebook login
    console.log('Login with Facebook clicked');
  }

  loginWithGoogle(): void {
    // Implement Google login
    console.log('Login with Google clicked');
  }
}


