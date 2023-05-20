import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { LoginService } from './auth/services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'session-expire';

  constructor(
    private idleService: BnNgIdleService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    /*console.log('Expiring session in 3 seconds...')

    this.idleService.startWatching(3).subscribe((isUserInactive) => {
      if (isUserInactive) {
        console.log('Session expired...');
        const currentRoute = this.router.url;
        if(currentRoute !== '/login') {
          this.loginService.logout();
        }
      }
    });*/
  }
}
