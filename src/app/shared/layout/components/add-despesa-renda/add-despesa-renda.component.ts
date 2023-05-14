import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-despesa-renda',
  templateUrl: './add-despesa-renda.component.html',
  styleUrls: ['./add-despesa-renda.component.scss']
})
export class AddDespesaRendaComponent implements OnInit {
  formData: FormGroup;  
  veiculoForm: FormGroup;

  tipoCategoria = [
    'Despesa',
    'Renda',
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
    this.formData = new FormGroup({
      tituloDespesa:    new FormControl('', [Validators.required, Validators.minLength(5),]),
      valorDespesa:     new FormControl('', [Validators.required,]),
      categoria:        new FormControl('', [Validators.required]),
      dataVencDespesa:  new FormControl('', [Validators.required,]),
      dataPagDespesa:   new FormControl('', []),
      descricaoDespesa: new FormControl('', []),
    });
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  onSubmit(form: any) {
    console.log(form);
    this.createForm();
  }
}
