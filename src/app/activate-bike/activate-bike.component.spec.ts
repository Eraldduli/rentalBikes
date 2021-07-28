import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateBikeComponent } from './activate-bike.component';

describe('ActivateBikeComponent', () => {
  let component: ActivateBikeComponent;
  let fixture: ComponentFixture<ActivateBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
