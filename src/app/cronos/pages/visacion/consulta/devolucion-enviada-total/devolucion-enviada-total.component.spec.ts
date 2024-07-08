import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionEnviadaTotalComponent } from './devolucion-enviada-total.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimengModule } from '../../../../../primeng/primeng.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DevolucionEnviadaTotalComponent', () => {
  let component: DevolucionEnviadaTotalComponent;
  let fixture: ComponentFixture<DevolucionEnviadaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevolucionEnviadaTotalComponent],
      imports:[
        PrimengModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientTestingModule
      ]
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
