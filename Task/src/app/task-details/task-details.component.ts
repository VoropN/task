import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { TaskRepository } from "../../models/task-repository";
import { ITask } from "../../models/task.model";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('txt') textArea: ElementRef;

  public tasksDetails: ITask;

  constructor(
    private route: ActivatedRoute,
    private tasks: TaskRepository,
    private location: Location) {
    }

  ngOnInit(): void {
    this.getTask();
  }

  ngAfterViewInit() {
  }
  
  setHeight(): void {
    if( this.textArea.nativeElement.scrollHeight != this.textArea.nativeElement.offsetHeight) {
      this.textArea.nativeElement.style.height = this.textArea.nativeElement.scrollHeight + 'px';
    }
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasksDetails = this.tasks.getTaskById(id);
  }
}
