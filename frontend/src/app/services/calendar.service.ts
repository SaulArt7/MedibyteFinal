import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  selectedDate: any
  constructor() {
    this.selectedDate = {}
  }
}
