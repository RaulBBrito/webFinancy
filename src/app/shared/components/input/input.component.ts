import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input-customer',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string = '';
  @Input() value: string[];
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() widthLabel: string = 'largura-label-142';

  @Output() selectedChangedEvent = new EventEmitter();
  @Output() filterInputValueEvent = new EventEmitter();
  @Output() formatDateEvent = new EventEmitter();

  filteredOptions: Observable<String[]>;
  public dateValue = new Date();

  constructor() {}

  ngOnInit() {}

  onChangeDate(value: any, flag: any){
    if(flag == "datepicker"){
      let day = "0"+value.value.getDate();
      day = day.substring(day.length-2, day.length);
      let month = value.value.getMonth()+1;
      month = "0"+month;
      month = month.substring(month.length-2, month.length);
      let year = value.value.getFullYear();
      let date: string = day+""+month+""+year;
      this.formatDateEvent.emit(date);
    }else{
      value = this.control.value;
      let date = new Date(value.substr(4), value.substr(2 ,2)-1, value.substr(0,2));
      this.dateValue = date;
    }
  }

  selectedChanged(){
    this.selectedChangedEvent.emit();
  }

  filterInputValue(){
    this.filterInputValueEvent.emit();
  }

  displayErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
