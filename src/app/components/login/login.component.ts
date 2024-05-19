import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersRepoService } from '../../services/users.repo.service';
import { StateService } from '../../services/state.service';
import { UserLoginDto } from '../../models/user.model';
import { Router ,RouterModule } from '@angular/router';

@Component({
  selector: 'quest-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
  <section class="login-box">
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
    <div class="login-title">
      <h2>Login</h2>
    </div>
    <label for="email">Email</label>
    <input type="email" id="email" formControlName="email">
    <label for="password">Contraseña</label>
    <input type="password" id="password" formControlName="password">
    <div class="button-box">
    <button type="submit" [disabled]="loginForm.invalid">Entrar</button>
    <button (click)="onClickRegister()">Registro</button>
    </div>
  </form>
</section>
  `,
  styles: `
  body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.login-box {
  background-image: url('https://res.cloudinary.com/djzn9f9kc/image/upload/v1715865441/3636480cef66da8a4def4347eb46c770_fkqbd0.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

.login-form {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.login-title {
  width: 100%;
  text-align: center;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #1c1a1c;
  margin: 0;
}

label {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 200;
  color: #1c1a1c;
  align-self: flex-start;
}

input {
  font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #9d95a0;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1c1a1c;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
}

.button-box {
  display: flex;
  justify-content: space-around;

}

@media (min-width: 600px) {
  .login-box {
    padding: 40px;
  }

  .login-form {
    padding: 30px;
    gap: 20px;
  }

  h2 {
    font-size: 28px;
  }
}
  `
})
export default class LoginComponent {
  private repo = inject(UsersRepoService);
  private state = inject(StateService);
  private builder = inject(FormBuilder);
  private router = inject(Router)

  loginForm = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
  const { email, password } = this.loginForm.value;
  const userLogin = { email, password } as UserLoginDto; // Modificado para utilizar el correo electrónico y la contraseña

  this.repo.login(userLogin).subscribe({
    next: ({ token }) => {
      this.state.setLogin(token);
      console.log('Logged in', token);
      this.router.navigate(['/home'])
    },
    error: (err) => {
      console.error(err);
      this.state.setLoginState('error');
    },
  });
}
  onClickRegister() {
    this.router.navigate(['register']);
  }
}
