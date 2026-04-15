import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tendenciasfem } from './tendenciasfem';

describe('Tendenciasfem', () => {
  let component: Tendenciasfem;
  let fixture: ComponentFixture<Tendenciasfem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tendenciasfem],
    }).compileComponents();

    fixture = TestBed.createComponent(Tendenciasfem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
