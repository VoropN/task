import { TaskStatus } from "./task-status";

export interface ITask {
    id: number;
    name: string;
    creation_date: Date;
    due_date: Date;
    start_date: Date;
    is_completed: boolean;
    is_archived: boolean;
    estimated_effort: string;
    actual_effort: string;
    physical_progress: string;
    obj_status: TaskStatus;
    description: string;
    project_id: string;
    is_high_priority: boolean;
    tags: string;
}