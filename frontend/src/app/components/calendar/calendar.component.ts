import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from "moment";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  citasDisp: string[] /* ['2022-08-01', '2022-08-02', '2022-08-03'] */
  diasMensuales: string[]

  monthSelect: any[];
  dateSelect: any;
  dateValue: any;




  constructor() {
    this.monthSelect = []
    this.citasDisp = ['2022-08-01','2022-08-02','2022-08-03']
    this.diasMensuales = []
  }

  ngOnInit(): void {
    this.getDaysFromDate(8, 2022)
  }

  getDaysFromDate(month: number, year: number) {

    const startDate = moment(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`, false);

      const fecha = {
        name: dayObject.format("YYYY-MM-DD"),
        value: a,
        //indexWeek: dayObject.isoWeekday()
      }

      this.diasMensuales.push(fecha.name)



      /* if(diafecha===this.citasDisp){
        console.log('disponibles')
      }else{
        console.log('ocupado')
      } */

      /* const dias = Object.values(dayObject).map((day) => {
        if (dayObject.format("YYYY-MM-DD")===this.citasDisp) {
          console.log('disponibles')
      }else{
        console.log('ocupado')
      }
      })
      console.log(dias) */
      console.log(this.diasMensuales)
      return fecha;

    });

    this.monthSelect = arrayDays;
    console.log(typeof (this.diasMensuales))


  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: any) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;

    

  }

}
