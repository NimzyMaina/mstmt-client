import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FacebookModule} from 'ngx-facebook';
import { StatementComponent } from './statement/statement.component';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { PdfComponent } from './pdf/pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatementComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
