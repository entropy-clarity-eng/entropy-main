import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectThoughtComponent } from './collect-thought.component';

describe('CollectThoughtComponent', () => {
  let component: CollectThoughtComponent;
  let fixture: ComponentFixture<CollectThoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectThoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
