import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarmenuComponent } from './shared/components/navbarmenu/navbarmenu.component';
import { CronosComponent } from './cronos/cronos.component';
import { PrimengModule } from './primeng/primeng.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        PrimengModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavbarmenuComponent,
        CronosComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
