import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tendenciasmasc } from './tendenciasmasc';

describe('Tendenciasmasc', () => {
  let component: Tendenciasmasc;
  let fixture: ComponentFixture<Tendenciasmasc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tendenciasmasc],
    }).compileComponents();

    fixture = TestBed.createComponent(Tendenciasmasc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
