import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndHelpPage } from './contact-and-help-page';

describe('ContactAndHelpPage', () => {
  let component: ContactAndHelpPage;
  let fixture: ComponentFixture<ContactAndHelpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAndHelpPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAndHelpPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
