import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoCalcados } from './secao-calcados';

describe('SecaoCalcados', () => {
  let component: SecaoCalcados;
  let fixture: ComponentFixture<SecaoCalcados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoCalcados],
    }).compileComponents();

    fixture = TestBed.createComponent(SecaoCalcados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
