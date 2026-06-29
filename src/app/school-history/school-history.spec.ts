import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHistory } from './school-history';

describe('SchoolHistory', () => {
  let component: SchoolHistory;
  let fixture: ComponentFixture<SchoolHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
