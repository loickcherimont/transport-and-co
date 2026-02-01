import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesAndSchedules } from './lines-and-schedules';

describe('LinesAndSchedules', () => {
  let component: LinesAndSchedules;
  let fixture: ComponentFixture<LinesAndSchedules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinesAndSchedules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesAndSchedules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
