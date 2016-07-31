<div>
  <form (ngSubmit)="onSubmit(loginForm)" #loginForm="ngForm">
    <div>
      <label>email</label>
      <input type="text" id="email" name="email" #email="ngModel"
        [(ngModel)]="login.email" placeholder="email" required />
      <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
        email is required
      </div>
    </div>
    <div>
      <label>Password</label>
      <input type="password" id="password" name="password" #password="ngModel"
        [(ngModel)]="login.password" placeholder="password" required />
      <div [hidden]="password.valid || password.pristine" class="alert alert-danger">
        password is required
      </div>
    </div>
    <button type="submit" class="btn btn-default" [disabled]="!loginForm.form.valid">Submit</button>
  </form>

</div>
