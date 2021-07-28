import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBikesComponent } from './show-bikes.component';

describe('ShowBikesComponent', () => {
  let component: ShowBikesComponent;
  let fixture: ComponentFixture<ShowBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
