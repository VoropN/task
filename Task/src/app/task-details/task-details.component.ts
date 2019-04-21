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
export class TaskDetailsComponent implements OnInit {
  @ViewChild('txt') textArea: ElementRef;

  public tasksDetails: ITask;

  constructor(
    private route: ActivatedRoute,
    private taskRepository: TaskRepository,
    private location: Location) {
    }

  ngOnInit(): void {
    this.initiateTaskDetails();
  }
  
  setHeight(): void {
    if( this.textArea.nativeElement.scrollHeight != this.textArea.nativeElement.offsetHeight - 10) {
      this.textArea.nativeElement.style.height = this.textArea.nativeElement.scrollHeight - 10 + 'px';
    }
  }

  initiateTaskDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasksDetails = this.taskRepository.getTaskById(id);
  }

  taskNameChanged() {
    this.taskRepository.updateTask(this.tasksDetails);
  }
}
