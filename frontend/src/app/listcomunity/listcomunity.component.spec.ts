import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomunityComponent } from './listcomunity.component';

describe('ListcomunityComponent', () => {
  let component: ListcomunityComponent;
  let fixture: ComponentFixture<ListcomunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcomunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
