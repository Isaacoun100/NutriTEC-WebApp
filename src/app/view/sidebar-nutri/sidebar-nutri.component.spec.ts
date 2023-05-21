import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNutriComponent } from './sidebar-nutri.component';

describe('SidebarNutriComponent', () => {
  let component: SidebarNutriComponent;
  let fixture: ComponentFixture<SidebarNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
