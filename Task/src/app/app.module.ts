import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import * as taskData from "../models/tasks.json";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'TASK_SOURCE', useValue: taskData.default }],
  bootstrap: [AppComponent]
})
export class AppModule { }
