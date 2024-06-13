import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmenuComponent } from './navbarmenu.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('NavbarmenuComponent', () => {
  let component: NavbarmenuComponent;
  let fixture: ComponentFixture<NavbarmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarmenuComponent],
      imports:[PrimengModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
              queryParamMap: convertToParamMap({}),
              params: {},
              queryParams: {}
            },
            paramMap: of(convertToParamMap({})),
            queryParamMap: of(convertToParamMap({})),
            params: of({}),
            queryParams: of({})
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create menu items on init', () => {
    expect(component.items).toBeDefined();
    expect(component.items.length).toBeGreaterThan(0);
  });

  it('should have 14 elements in the "Consultas" subcategory', () => {
    component.createMenu();
    const consultasCategory = component.items.find(item => item.label === 'Visación');
    const consultasItemsGroup = consultasCategory?.items?.find(group => 
      group.some(subItem => subItem.label === 'Consultas')
    );
    const consultasItems = consultasItemsGroup?.find(subItem => subItem.label === 'Consultas')?.items;

    if (consultasItems) {
      expect(consultasItems.length).toBe(14);
    } else {
      fail('Consultas subcategory not found');
    }
  });

  it('should have 24 elements in the "Visacion" option', () => {
    component.createMenu();
    const visacionOption = component.items.find(item => item.label === 'Visación')
    const visacionItemsGroup = visacionOption?.items?.find(group =>
      group.some(subItem => subItem.label === 'Visación')
    );

    const visaciónItems = visacionItemsGroup?.find(subItem => subItem.label === 'Visación')?.items;
    const parametrosItems = visacionItemsGroup?.find(subItem => subItem.label === 'Parametros')?.items;
    const consultasItems = visacionOption?.items?.find(group => group.some(subItem => subItem.label === 'Consultas'))?.at(0)?.items
    const otrosItems = visacionOption?.items?.find(group => group.some(subItem => subItem.label === 'Otros'))?.at(0)?.items

    const visacionElemnts = [visaciónItems,parametrosItems,consultasItems,otrosItems]

    const totalElemnts = visacionElemnts.reduce((sum,currentArray) => sum + currentArray!.length,0)

    if (totalElemnts) {
      expect(totalElemnts).toBe(24);
    } else {
      fail('Consultas subcategory not found');
    }
  });
  
  it('should have a routerLink defined for each item in "Visación" option', () => {
    component.createMenu();
    const visacionCategory = component.items.find(item => item.label === 'Visación');
    const visacionItemsGroup = visacionCategory?.items?.find(group =>
      group.some(subItem => subItem.label === 'Visación')
    );
    const visacionItems = visacionItemsGroup?.find(subItem => subItem.label === 'Visación')?.items;
    const parametrosItems = visacionItemsGroup?.find(subItem => subItem.label === 'Parametros')?.items;
    const consultasItems = visacionCategory?.items?.find(group => group.some(subItem => subItem.label === 'Consultas'))
    const otrosItems = visacionCategory?.items?.find(group => group.some(subItem => subItem.label === 'Otros'))
    
    if (visacionItems && parametrosItems && consultasItems && otrosItems) {
      visacionItems.forEach(item => {
        expect(item.routerLink).toBeDefined();
      });
      parametrosItems.forEach(item => {
        expect(item.routerLink).toBeDefined();
      });
      consultasItems.find(elements => {
        elements.items?.forEach(item => {
          expect(item.routerLink).toBeDefined();
        })
      });
      otrosItems.find(elements => {
        elements.items?.forEach(item => {
          expect(item.routerLink).toBeDefined();
        })
      });
    } else {
      fail('subcategories not found');
    }
  });

  it('should contain a category labeled "Administración del portal"', () => {
    component.createMenu();
    const adminCategory = component.items.find(item => item.label === 'Administración del portal');
    expect(adminCategory).toBeDefined();
  });

  it('should contain a category labeled "Visación"', () => {
    component.createMenu();
    const adminCategory = component.items.find(item => item.label === 'Visación');
    expect(adminCategory).toBeDefined();
  });

});
