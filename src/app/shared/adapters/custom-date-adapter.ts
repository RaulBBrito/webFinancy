import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import * as moment from 'moment';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: any): string {
      return moment(date).format('DD/MM/YYYY');
  }

  override parse(value: any): Date | null {
      if(value && typeof value === 'string' && value.length !== 10){
        return null;
      }
      return moment(value, 'DD/MM/YYYY', true).toDate();
  }

}