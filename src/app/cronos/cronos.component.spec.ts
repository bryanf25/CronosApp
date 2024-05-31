import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronosComponent } from './cronos.component';

describe('CronosComponent', () => {
  let component: CronosComponent;
  let fixture: ComponentFixture<CronosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CronosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
