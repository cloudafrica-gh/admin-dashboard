import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import {AccServiceService} from '../../services/acc-service.service';
import {Router} from '@angular/router';
import {DafabetService} from '../../services/dafabet.service';

declare const $: any;

@Component({
  selector: 'app-dafabet',
  templateUrl: './dafabet.component.html',
  styleUrls: ['./dafabet.component.scss']
})
export class DafabetComponent implements OnInit {
  public rows: any = [];
  public srch = [];
  public addEx = [];
  public uptEx = [];

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  constructor(
    private accService: AccServiceService,
    private dafabetService: DafabetService,
    private router: Router) {
    // this.rows = accService.dafabet;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function(e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
    this.getAllTransactions();
  }

  onEdit(item) {
    // console.log(item);
    this.router.navigate(['accounts/expenses/edit'], { queryParams: { id: item.expenseID } });
  }

  onDelete(c) {
    // console.log("=" + c.expenseID + "=");
    const index = this.rows.findIndex( (item, i) => {
      return item.expenseID === c.expenseID;
    });

    // console.log(index);
    if (index > -1) {
      this.rows.splice(index, 1);
      this.srch.splice(index, 1);
    }
    // console.log(this.rows);
    this.rows = this.rows;
  }

  getAllTransactions() {
    this.dafabetService.getAllDafabetTransactions()
      .subscribe(res => {
        this.rows = res;
        console.log('get all realtime transactions >>>', this.rows);
      }, err => {
        console.log('error calling Dafabet transaction data', err);
      });
  }

}
