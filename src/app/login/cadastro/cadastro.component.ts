import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '@app/auth/services/login.service';
import { Login, Usuario } from '@app/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['../login.component.scss']
})
export class CadastroComponent {
  /*public isLogin: boolean = true;

  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  usuario: Usuario = new Usuario();
  loading: boolean = false;
  message!:string;

  formulario!: FormGroup;
  formularioCadastro!: FormGroup;

  formularioLogin!: Login;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    if(this.loginService.getUsuarioLogado()){
      this.router.navigate(["/home"]);
    }
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['raulbbrito@hotmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.formularioCadastro = this.formBuilder.group({
      nome: ['Raul Brito', [Validators.required]],
      email: ['raulbbrito@hotmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getPagina(){
    this.router.navigate(['/login']);
    //location.reload();
  }

  logar(): void {
    this.loading = true;
    if(this.formulario.valid){
      console.table(this.formulario.value);
      this.loginService.login({email: this.formulario.value.email, password: this.formulario.value.password}).subscribe((usu) => {
        if(usu != null) {
          //this.loginService.usuarioLogado = usu;
          this.router.navigate(["home"]);
        }else{
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
          //this.loginService.usuarioLogado = usu;
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
  }*/
}
