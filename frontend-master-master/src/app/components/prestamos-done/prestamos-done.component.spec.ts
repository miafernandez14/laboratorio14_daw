import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosDoneComponent } from './prestamos-done.component';

describe('PrestamosDoneComponent', () => {
  let component: PrestamosDoneComponent;
  let fixture: ComponentFixture<PrestamosDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamosDoneComponent]
    });
    fixture = TestBed.createComponent(PrestamosDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
