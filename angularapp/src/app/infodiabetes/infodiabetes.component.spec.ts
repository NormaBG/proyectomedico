import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodiabetesComponent } from './infodiabetes.component';

describe('InfodiabetesComponent', () => {
  let component: InfodiabetesComponent;
  let fixture: ComponentFixture<InfodiabetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfodiabetesComponent]
    });
    fixture = TestBed.createComponent(InfodiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
