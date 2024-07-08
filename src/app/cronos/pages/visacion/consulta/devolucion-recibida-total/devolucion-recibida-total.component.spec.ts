import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionRecibidaTotalComponent } from './devolucion-recibida-total.component';
import { PrimengModule } from '../../../../../primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DevolucionRecibidaTotalComponent', () => {
  let component: DevolucionRecibidaTotalComponent;
  let fixture: ComponentFixture<DevolucionRecibidaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevolucionRecibidaTotalComponent],
      imports:[
        PrimengModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientTestingModule
      ]
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
