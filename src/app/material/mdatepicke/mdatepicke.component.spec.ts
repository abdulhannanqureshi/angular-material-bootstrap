import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdatepickeComponent } from './mdatepicke.component';

describe('MdatepickeComponent', () => {
  let component: MdatepickeComponent;
  let fixture: ComponentFixture<MdatepickeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdatepickeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdatepickeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
