import { Component, OnInit } from '@angular/core';
import { Login} from '@app/core/models';
import { LoginService } from '@app/auth/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private idleService: BnNgIdleService
  ) { 
    if(this.loginService.getUsuarioLogado()){
      this.router.navigate(["/home"]);
    }
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.idleService.stopTimer();
  }


  logar(): void {
    if(this.formulario.valid){
      this.loginService.login({email: this.formulario.value.email, password: this.formulario.value.password})
      .subscribe((usu) => (usu != null) ? this.router.navigate(["home"]) : null)
    }
  }

  cadastrar(): void {
  }

  redirect(){
    this.router.navigate(["home"]);
  }

}
