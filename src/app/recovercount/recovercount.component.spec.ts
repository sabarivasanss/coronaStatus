import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecovercountComponent } from './recovercount.component';

describe('RecovercountComponent', () => {
  let component: RecovercountComponent;
  let fixture: ComponentFixture<RecovercountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecovercountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecovercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
