import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddBugsComponent} from './add-bug.component';

describe('AddBugsComponent', () => {
  let component: AddBugComponent;
  let fixture: ComponentFixture<AddBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
