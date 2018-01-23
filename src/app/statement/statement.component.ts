import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
declare var alertify: any;

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  statements = [];

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.login.getStatements()
      .subscribe(
        (res) => this.statements = res.data,
        (err) => alertify.error('Unable to find statements')
      );
  }

  getPath(path: string) {
    path = path.substring(15);
    return path = path.substring(path.length - 4, 0);
  }

}
