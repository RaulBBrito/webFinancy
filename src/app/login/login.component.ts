import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '@app/core/models';
import { LoginService } from '@app/auth/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!:string;

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    if(this.loginService.usuarioLogado){
      this.router.navigate(["/home"]);
    }
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.route.queryParams
    .subscribe(params =>{
      this.message = params['error'];
    })
  }

  logar(): void {
    this.loading = true;
    if(this.formulario.valid){
      this.loginService.login(this.login).subscribe((usu) => {
        if(usu != null) {
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate(["home"]);
        }else{
          this.loading = false;
          this.message = "Usuario/Senha inválidos"
        }
      }

      )
    }
  }

  redirect(){
    this.router.navigate(["home"]);
  }

}
