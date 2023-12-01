import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturadatosComponent } from './capturadatos.component';

describe('CapturadatosComponent', () => {
  let component: CapturadatosComponent;
  let fixture: ComponentFixture<CapturadatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturadatosComponent]
    });
    fixture = TestBed.createComponent(CapturadatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
