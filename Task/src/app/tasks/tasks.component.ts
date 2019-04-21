import { Component, OnInit } from '@angular/core';
import { TaskRepository } from "../../models/task-repository";
import { ITask } from "../../models/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  public activeTasks: ITask[];

  constructor(private taskRepository: TaskRepository) { 
    this.activeTasks = taskRepository.getActiveTasks();
   }

  ngOnInit() {
  }

}
