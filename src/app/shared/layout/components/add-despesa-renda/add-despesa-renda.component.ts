import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-despesa-renda',
  templateUrl: './add-despesa-renda.component.html',
  styleUrls: ['./add-despesa-renda.component.scss']
})
export class AddDespesaRendaComponent implements OnInit {
  formDataDespesa: FormGroup;  
  formDataRenda: FormGroup;  
  veiculoForm: FormGroup;

  tipoCategoria = [
    'Despesa',
    'Renda',
  ]
  tipoItemCategoria = [
    'Cartão',
    'Avulso',
  ]
  listCartaoCategoria = [
    'Itau',
    'Santander',
  ]
  constructor(
    private fb: FormBuilder,
  ){
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formDataDespesa = new FormGroup({
      tituloDespesa:    new FormControl('', [Validators.required, Validators.minLength(5),]),
      valorDespesa:     new FormControl('', [Validators.required,]),
      categoria:        new FormControl('', [Validators.required]),
      dataVencDespesa:  new FormControl('', [Validators.required,]),
      dataPagDespesa:   new FormControl('', []),
      descricaoDespesa: new FormControl('', []),
      idRecurso:        new FormControl('1', []),
      idCartao:         new FormControl('', []),
      statusPagamento:  new FormControl('S', []),
    });
    this.formDataRenda = new FormGroup({
      tituloRenda:    new FormControl('', [Validators.required, Validators.minLength(5),]),
      valorRenda:     new FormControl('', [Validators.required,]),
      categoria:      new FormControl('', [Validators.required]),
      dataVencRenda:  new FormControl('', [Validators.required,]),
      dataPagRenda:   new FormControl('', []),
      descricaoRenda: new FormControl('', []),
    });
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  onSubmit(form: any, tipoCadastro: string) {
    console.log(form);

    if(tipoCadastro === 'D'){
      console.log("Cadastrar Dispesas");
    }else{
      console.log("Cadastrar Rendas");
    }

    this.createForm();
  }
}
