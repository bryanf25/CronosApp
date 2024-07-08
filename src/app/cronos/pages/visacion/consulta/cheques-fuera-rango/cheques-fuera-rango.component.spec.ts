import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesFueraRangoComponent } from './cheques-fuera-rango.component';
import { PrimengModule } from '../../../../../primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../../shared/shared.module';

describe('ChequesFueraRangoComponent', () => {
  let component: ChequesFueraRangoComponent;
  let fixture: ComponentFixture<ChequesFueraRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChequesFueraRangoComponent],
      imports:[
        PrimengModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChequesFueraRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
