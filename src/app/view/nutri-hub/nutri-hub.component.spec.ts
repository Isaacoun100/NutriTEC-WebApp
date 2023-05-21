import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriHubComponent } from './nutri-hub.component';

describe('NutriHubComponent', () => {
  let component: NutriHubComponent;
  let fixture: ComponentFixture<NutriHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutriHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutriHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
