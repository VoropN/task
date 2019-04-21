import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskStatus } from 'src/models/task-status';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { tasksMock } from 'src/models/tasks-mock-data';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientTestingModule],
      declarations: [TasksComponent, TaskDetailsComponent],
      providers: [
        { provide: 'TASK_SOURCE', useValue: tasksMock  }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
