import { TaskStatus } from './task-status';

export const tasksMock = [{ id: 1, name: 'Very important task', obj_status: TaskStatus.ACTIVE, is_high_priority: true },
    { id: 2, obj_status: TaskStatus.DELETED },
    { id: 3, obj_status: TaskStatus.TRASHED, name: 'Deleted',  is_high_priority: true },
    { id: 4, obj_status: TaskStatus.ACTIVE }];