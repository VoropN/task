import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { tasksMock } from 'src/models/tasks-mock-data';
import { TaskDetailsComponent } from './task-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { TasksComponent } from '../tasks/tasks.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, AppRoutingModule, HttpClientTestingModule],
      declarations: [TaskDetailsComponent, TasksComponent],
      providers: [
        { provide: 'TASK_SOURCE', useValue: tasksMock  }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
