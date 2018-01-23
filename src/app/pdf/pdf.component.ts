import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  url = '';
  password = '';
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.showPdf(params['id1'], params['id2']);
    });
  }

  showPdf(url: string, pass: string) {
    const u = 'http://fe42a7fa.ngrok.io/mpesa/public/storage/uploads/';
    this.url = u + url + '.pdf';
    this.password = pass;
  }

}
