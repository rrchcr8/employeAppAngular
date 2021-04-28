import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  //or another way
  //providers: [{provide: APP_BASE_HREF, useValue: ''}],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
