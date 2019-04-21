import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as taskData from "./tasks.json";
import { TaskStatus } from "./task-status";
import { ITask } from "./task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskRepository {
    private tasks: ITask[];
    
    constructor (private http: HttpClient) {
        this.tasks = taskData.default;
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
}