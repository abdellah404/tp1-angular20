import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalutationComponent } from './salutation';

describe('SalutationComponent', () => {
  let component: SalutationComponent;
  let fixture: ComponentFixture<SalutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalutationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalutationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
