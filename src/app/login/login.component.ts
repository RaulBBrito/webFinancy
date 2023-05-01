import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login, Usuario } from '@app/core/models';
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

 public isLogin: boolean = true;

  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  usuario: Usuario = new Usuario();
  loading: boolean = false;
  message!:string;

  formulario!: FormGroup;
  formularioCadastro!: FormGroup;

  formularioLogin: Login = {
    email: 'raulbbrito@hotmail.com',
    password: '513482Am@'

  }

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
      email: ['email@email.com', [Validators.required, Validators.email]],
      password: ['123adad@@', [Validators.required, Validators.minLength(6)]],
    });

    this.formularioCadastro = this.formBuilder.group({
      nome: ['Raul Brito', [Validators.required]],
      email: ['raulbbrito@hotmail.com', [Validators.required, Validators.email]],
      password: ['513482Am@', [Validators.required, Validators.minLength(6)]],
    });

    /*this.route.queryParams
    .subscribe(params =>{
      this.message = params['error'];
    })*/
  }

  getPagina(){
    this.isLogin = !this.isLogin;
  }

  logar(): void {
    this.loading = true;
    if(this.formulario.valid){
      this.loginService.login(this.formularioLogin).subscribe((usu) => {
        if(usu != null) {

          let usu = new Usuario(null, 'Raul Brito ', 'email@email', '', "ADMIN");
          
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

  cadastrar(): void {
    this.loading = true;
    if(this.formularioCadastro.valid){
      this.loginService.cadastrar(this.usuario).subscribe((usu) => {
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
