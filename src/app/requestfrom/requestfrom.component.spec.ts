import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestfromComponent } from './requestfrom.component';

describe('RequestfromComponent', () => {
  let component: RequestfromComponent;
  let fixture: ComponentFixture<RequestfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
