import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lenin } from './lenin';

describe('Lenin', () => {
  let component: Lenin;
  let fixture: ComponentFixture<Lenin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lenin],
    }).compileComponents();

    fixture = TestBed.createComponent(Lenin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
