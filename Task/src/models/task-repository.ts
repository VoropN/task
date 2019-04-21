import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { TaskStatus } from "./task-status";
import { ITask } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskRepository {
    
    constructor (@Inject('TASK_SOURCE') private tasks: ITask[], private http: HttpClient) {
      //  this.tasks = taskData.default;
    }

    getActiveTasks(): ITask[] {
        return (
            this.tasks &&
                this.tasks.filter(task => task.obj_status === TaskStatus.ACTIVE)
        );
    }

    getTaskById(id: number): ITask {
        return this.tasks &&
                this.tasks.find(task => task.id === id)
    }

    updateTask(task: ITask) {
        this.http.put<ITask>('api/task', task).subscribe(
            task => console.log('successfully updated ', task),
            error => console.log('error ' , error));
    }
}