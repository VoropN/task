import { TestBed } from '@angular/core/testing';
import { TaskRepository } from './task-repository';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TaskStatus } from './task-status';

fdescribe('Task repository', () => {
    let taskRepository: TaskRepository;

    beforeEach(() => {
        const tasks = [{ id: 1, obj_status: TaskStatus.ACTIVE },
        { id: 2, obj_status: TaskStatus.DELETED },
        { id: 3, obj_status: TaskStatus.TRASHED },
        { id: 4, obj_status: TaskStatus.ACTIVE }];

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: 'TASK_SOURCE', useValue: tasks },
                TaskRepository
            ]
        });

        taskRepository = TestBed.get(TaskRepository);
    });

    it('expect task repository to be defined', () => {
        expect(taskRepository).toBeDefined();
    });

    it('should find only active task', () => {
        const tasks = taskRepository.getActiveTasks();
        const taskIds = tasks && tasks.map(task => task.id).sort();

        expect(tasks).toBeDefined();
        expect(tasks.length).toEqual(2);
        expect(taskIds).toEqual([1, 4]);
    });
});