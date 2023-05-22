import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-add-despesa-renda',
  templateUrl: './add-despesa-renda.component.html',
  styleUrls: ['./add-despesa-renda.component.scss']
})
export class AddDespesaRendaComponent implements OnInit {

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
