import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router: Router,
    private loginService: LoginService){
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
    location.reload();
  }

}
