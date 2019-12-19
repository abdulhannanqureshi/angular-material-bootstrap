import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeheadComponent } from './filter-typehead.component';

describe('FilterTypeheadComponent', () => {
  let component: FilterTypeheadComponent;
  let fixture: ComponentFixture<FilterTypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTypeheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
