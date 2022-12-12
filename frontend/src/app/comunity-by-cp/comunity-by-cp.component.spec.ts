import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunityByCpComponent } from './comunity-by-cp.component';

describe('ComunityByCpComponent', () => {
  let component: ComunityByCpComponent;
  let fixture: ComponentFixture<ComunityByCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunityByCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunityByCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
