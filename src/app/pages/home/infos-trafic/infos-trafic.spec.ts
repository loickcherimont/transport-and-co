import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosTrafic } from './infos-trafic';

describe('InfosTrafic', () => {
  let component: InfosTrafic;
  let fixture: ComponentFixture<InfosTrafic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosTrafic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosTrafic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
