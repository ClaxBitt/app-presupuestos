import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosRegisterComponent } from './ingresos-register.component';

describe('IngresosRegisterComponent', () => {
  let component: IngresosRegisterComponent;
  let fixture: ComponentFixture<IngresosRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresosRegisterComponent]
    });
    fixture = TestBed.createComponent(IngresosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
