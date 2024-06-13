import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionRecibidaTotalComponent } from './devolucion-recibida-total.component';

describe('DevolucionRecibidaTotalComponent', () => {
  let component: DevolucionRecibidaTotalComponent;
  let fixture: ComponentFixture<DevolucionRecibidaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevolucionRecibidaTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevolucionRecibidaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
