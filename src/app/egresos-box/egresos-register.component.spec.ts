import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosRegisterComponent } from './egresos-register.component';

describe('EgresosRegisterComponent', () => {
  let component: EgresosRegisterComponent;
  let fixture: ComponentFixture<EgresosRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresosRegisterComponent]
    });
    fixture = TestBed.createComponent(EgresosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
