import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosDevueltosComponent } from './prestamos-devueltos.component';

describe('PrestamosDevueltosComponent', () => {
  let component: PrestamosDevueltosComponent;
  let fixture: ComponentFixture<PrestamosDevueltosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosDevueltosComponent]
    });
    fixture = TestBed.createComponent(PrestamosDevueltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
