import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFollowUpComponent } from './client-follow-up.component';

describe('ClientFollowUpComponent', () => {
  let component: ClientFollowUpComponent;
  let fixture: ComponentFixture<ClientFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFollowUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
