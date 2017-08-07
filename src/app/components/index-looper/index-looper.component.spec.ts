import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLooperComponent } from './index-looper.component';

describe('IndexLooperComponent', () => {
  let component: IndexLooperComponent;
  let fixture: ComponentFixture<IndexLooperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLooperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
