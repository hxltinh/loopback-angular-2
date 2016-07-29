<div>
  <form (ngSubmit)="onSubmit(loginForm)" #loginForm="ngForm">
    <div>
      <label>Username</label>
      <input type="text" id="username" name="username" #username="ngModel"
        [(ngModel)]="login.username" placeholder="username" required />
      <div [hidden]="username.valid || username.pristine" class="alert alert-danger">
        username is required
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
