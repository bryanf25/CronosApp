import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronosComponent } from './cronos.component';
import { RouterModule } from '@angular/router';

describe('CronosComponent', () => {
  let component: CronosComponent;
  let fixture: ComponentFixture<CronosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CronosComponent],
      imports:[
        RouterModule.forRoot([]),
      ]
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
