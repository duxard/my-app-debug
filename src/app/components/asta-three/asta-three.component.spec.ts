import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstaThreeComponent } from './asta-three.component';

describe('AstaThreeComponent', () => {
  let component: AstaThreeComponent;
  let fixture: ComponentFixture<AstaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstaThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
