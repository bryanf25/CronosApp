import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionEnviadaTotalComponent } from './devolucion-enviada-total.component';

describe('DevolucionEnviadaTotalComponent', () => {
  let component: DevolucionEnviadaTotalComponent;
  let fixture: ComponentFixture<DevolucionEnviadaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevolucionEnviadaTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevolucionEnviadaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
