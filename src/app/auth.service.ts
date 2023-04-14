export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const isAuth = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 8000);
    });
    return isAuth;
  }
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
