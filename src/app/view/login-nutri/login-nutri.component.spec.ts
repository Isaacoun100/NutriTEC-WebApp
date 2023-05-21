import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNutriComponent } from './login-nutri.component';

describe('LoginNutriComponent', () => {
  let component: LoginNutriComponent;
  let fixture: ComponentFixture<LoginNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
