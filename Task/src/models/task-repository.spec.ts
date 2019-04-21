import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TaskRepository } from './task-repository';
import { TaskStatus } from './task-status';
import { ITask } from './task.model';
import { tasksMock } from './tasks-mock-data';

describe('Task repository', () => {
    let taskRepository: TaskRepository;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: 'TASK_SOURCE', useValue: tasksMock },
                TaskRepository
            ]
        });

        taskRepository = TestBed.get(TaskRepository);
        httpTestingController = TestBed.get(HttpTestingController);
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

    it('should make one put request to update task', () => {
        const task: ITask = { id: 1, obj_status: TaskStatus.DELETED } as ITask;
        taskRepository.updateTask(task);
        const req = httpTestingController.expectOne('api/task');
        
        expect(req.request.method).toEqual('PUT');
    });

    it('should find task by id', () => {
        const id: number = 1;
        const tasksDetails = taskRepository.getTaskById(id);

        expect(tasksDetails).toBeDefined();
        expect(tasksDetails.id).toEqual(id);
    })
});