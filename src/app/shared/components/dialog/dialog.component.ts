import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Mes } from '@app/core/interfaces';
import { ISelectChaveValor } from '@app/core/interfaces/itipo-item-mes.interface';
import { TipoItemMesService } from '@app/core/services';
import { CartaoService } from '@app/core/services/cartao.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  formDataDespesa: FormGroup;  
  formDataRenda: FormGroup;  
  veiculoForm: FormGroup;

  isSelectCartao = false;

  tipoCategoria:ISelectChaveValor[] = [{
    chave: 'Despesa',
    valor: 'Renda',
  }]
  tipoItemCategoria: ISelectChaveValor[] = []
  listCartaoCategoria: ISelectChaveValor[] = []

  constructor(
    private fb: FormBuilder,
    private tipoItemMesService: TipoItemMesService,
    private cartaoService: CartaoService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Mes,
    private dialogRef: MatDialogRef<DialogComponent>
  ){

    console.log(data.mes);
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
    this.popularTipoDespesa();
  }

  popularTipoDespesa(){
    this.tipoItemMesService.getTipoItem()
      .subscribe((tipoDespesa) => {
        tipoDespesa.forEach(item =>{
          this.tipoItemCategoria.push({chave: item.id_tipo_item_mes, valor: item.desc_tipo_item_mes})
        })
        });
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
      idMensal:         new FormControl(("00" + this.data.mes).slice(-2), []),
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

    this.tipoItemMesService.getMensal(this.data.ano+"-"+("00" + this.data.mes).slice(-2)+"-"+"01")
      .subscribe((mensal) => {
        
        if(tipoCadastro === 'D'){
          console.log("Cadastrar Dispesas");
        }else{
          console.log("Cadastrar Rendas");
        }
    
        this.createForm();

      this.isSelectCartao = false;
        });

    
  }

  buscarCartao(cartaoSelecionado: any){

    if(cartaoSelecionado == 1){
      this.isSelectCartao = true;

      this.cartaoService.getListCartao()
      .subscribe((tipoDespesa) => {
        tipoDespesa.forEach(item =>{
          this.listCartaoCategoria.push({chave: item.id_cartao, valor: item.desc_cartao+" - "+item.num_final_cartao})
        })
        });
    }else{
      this.isSelectCartao = false;
      this.listCartaoCategoria = [];
    }
  }

  fechar(){
    this.dialogRef.close();
  }
}
