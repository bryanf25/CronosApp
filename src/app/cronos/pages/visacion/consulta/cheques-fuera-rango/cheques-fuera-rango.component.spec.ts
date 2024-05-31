import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesFueraRangoComponent } from './cheques-fuera-rango.component';

describe('ChequesFueraRangoComponent', () => {
  let component: ChequesFueraRangoComponent;
  let fixture: ComponentFixture<ChequesFueraRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChequesFueraRangoComponent]
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
