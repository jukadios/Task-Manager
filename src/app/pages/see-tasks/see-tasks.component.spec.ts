import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTasksComponent } from './see-tasks.component';

describe('SeeTasksComponent', () => {
  let component: SeeTasksComponent;
  let fixture: ComponentFixture<SeeTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
