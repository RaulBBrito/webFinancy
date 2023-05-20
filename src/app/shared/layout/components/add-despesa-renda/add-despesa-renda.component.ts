import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TipoItemMesService } from '@app/core/services';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-add-despesa-renda',
  templateUrl: './add-despesa-renda.component.html',
  styleUrls: ['./add-despesa-renda.component.scss']
})
export class AddDespesaRendaComponent implements OnInit {
  /*formDataDespesa: FormGroup;  
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
    'Cartão Itau - 6328',
    'Cartão Itau - 8536',
    'Santander - 4828',
  ]
  constructor(
    private fb: FormBuilder,
    private tipoItemMesService: TipoItemMesService,
    private dialog: MatDialog
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
  }*/

  constructor(
    private dialog: MatDialog){
  }

  ngOnInit() {
  }

  cadastrarDespesaRenda(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%',
      height: '',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
