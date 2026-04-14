import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCenter } from './section-center';

describe('SectionCenter', () => {
  let component: SectionCenter;
  let fixture: ComponentFixture<SectionCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCenter],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionCenter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
