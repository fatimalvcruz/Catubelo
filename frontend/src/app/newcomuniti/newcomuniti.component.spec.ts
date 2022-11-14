import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomunitiComponent } from './newcomuniti.component';

describe('NewcomunitiComponent', () => {
  let component: NewcomunitiComponent;
  let fixture: ComponentFixture<NewcomunitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcomunitiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcomunitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
