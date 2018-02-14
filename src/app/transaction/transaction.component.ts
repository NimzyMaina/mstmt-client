import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {alertify} from '../statement/statement.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions = [];

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.login.getTransactions()
      .subscribe(
        (res) => this.transactions = res.data,
        (err) => alertify.error('Unable to find statements')
      );
  }

}
