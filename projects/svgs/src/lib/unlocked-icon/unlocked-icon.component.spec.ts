import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedIconComponent } from './unlocked-icon.component';

describe('UnlockedIconComponent', () => {
  let component: UnlockedIconComponent;
  let fixture: ComponentFixture<UnlockedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UnlockedIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
