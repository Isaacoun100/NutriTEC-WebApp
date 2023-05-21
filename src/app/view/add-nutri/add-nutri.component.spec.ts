import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNutriComponent } from './add-nutri.component';

describe('AddNutriComponent', () => {
  let component: AddNutriComponent;
  let fixture: ComponentFixture<AddNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
