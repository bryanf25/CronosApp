import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazosVisacionYaPagadosComponent } from './rechazos-visacion-ya-pagados.component';
import { PrimengModule } from '../../../../../primeng/primeng.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RechazosVisacionYaPagadosComponent', () => {
  let component: RechazosVisacionYaPagadosComponent;
  let fixture: ComponentFixture<RechazosVisacionYaPagadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechazosVisacionYaPagadosComponent],
      imports:[
        PrimengModule,
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechazosVisacionYaPagadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
