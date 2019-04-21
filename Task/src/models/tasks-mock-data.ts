import { TaskStatus } from './task-status';

export const tasksMock = [{ id: 1, obj_status: TaskStatus.ACTIVE },
    { id: 2, obj_status: TaskStatus.DELETED },
    { id: 3, obj_status: TaskStatus.TRASHED },
    { id: 4, obj_status: TaskStatus.ACTIVE }];